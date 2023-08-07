package pagecode;

import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Collections;
import java.util.Iterator;
import java.util.Map;

import javax.faces.component.UIComponent;
import javax.faces.component.UIViewRoot;
import javax.faces.context.FacesContext;
import com.ibm.websphere.sdo.access.util.TypeCoercionUtil;
import commonj.sdo.DataObject;
import commonj.sdo.Property;
import java.lang.String;
import org.eclipse.emf.ecore.util.EcoreEList;
import java.util.List;
import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EPackage;
import java.util.StringTokenizer;
import com.ibm.websphere.sdo.mediator.jdbc.metadata.MetadataPackage;

/**
 * Provides a common base class for all generated code behind files.
 */
public abstract class PageCodeBase {

	protected static final MetadataPackage initPack = MetadataPackage.eINSTANCE;

	public PageCodeBase() {
	}

	protected void gotoPage(String pageName) {
		if (pageName != null) {
			FacesContext context = getFacesContext();
			UIViewRoot newView =
				context.getApplication().getViewHandler().createView(
					context,
					pageName);
			context.setViewRoot(newView);
			context.renderResponse();
		}
	}

	/**
	 * <p>Return the {@link UIComponent} (if any) with the specified
	 * <code>id</code>, searching recursively starting at the specified
	 * <code>base</code>, and examining the base component itself, followed
	 * by examining all the base component's facets and children.
	 * Unlike findComponent method of {@link UIComponentBase}, which
	 * skips recursive scan each time it finds a {@link NamingContainer},
	 * this method examines all components, regardless of their namespace
	 * (assuming IDs are unique).
	 *
	 * @param base Base {@link UIComponent} from which to search
	 * @param id Component identifier to be matched
	 */
	public static UIComponent findComponent(UIComponent base, String id) {

		// Is the "base" component itself the match we are looking for?
		if (id.equals(base.getId())) {
			return base;
		}

		// Search through our facets and children
		UIComponent kid = null;
		UIComponent result = null;
		Iterator kids = base.getFacetsAndChildren();
		while (kids.hasNext() && (result == null)) {
			kid = (UIComponent) kids.next();
			if (id.equals(kid.getId())) {
				result = kid;
				break;
			}
			result = findComponent(kid, id);
			if (result != null) {
				break;
			}
		}
		return result;
	}

	public static UIComponent findComponentInRoot(String id) {
		UIComponent ret = null;

		FacesContext context = FacesContext.getCurrentInstance();
		if (context != null) {
			UIComponent root = context.getViewRoot();
			ret = findComponent(root, id);
		}

		return ret;
	}

	/**
	 * Place an Object on the tree's attribute map
	 * 
	 * @param key
	 * @param value
	 */
	protected void putTreeAttribute(String key, Object value) {
		getFacesContext().getViewRoot().getAttributes().put(key, value);
	}

	/**
	 * Retrieve an Object from the tree's attribute map
	 * @param key
	 * @return
	 */
	protected Object getTreeAttribute(String key) {
		return getFacesContext().getViewRoot().getAttributes().get(key);
	}

	/**
	 * Return the result of the resolved expression
	 * 
	 * @param expression
	 * @return
	 */
	protected Object resolveExpression(String expression) {
		Object value = null;
		if ((expression.indexOf("#{") != -1)
			&& (expression.indexOf("#{") < expression.indexOf('}'))) {
			value =
				getFacesContext().getApplication().createValueBinding(
					expression).getValue(
					getFacesContext());
		} else {
			value = expression;
		}
		return value;
	}

	/**
	 * Resolve all parameters passed in via the argNames/argValues array pair, and 
	 * add them to the provided paramMap. If a parameter can not be resolved, then it
	 * will attempt to be retrieved from a cachemap stored using the cacheMapKey
	 * 
	 * @param paramMap
	 * @param argNames
	 * @param argValues
	 * @param cacheMapKey
	 */
	protected void resolveParams(
		Map paramMap,
		String[] argNames,
		String[] argValues,
		String cacheMapKey) {

		Object rawCache = getTreeAttribute(cacheMapKey);
		Map cache = Collections.EMPTY_MAP;
		if (rawCache instanceof Map) {
			cache = (Map) rawCache;
		}
		for (int i = 0; i < argNames.length; i++) {
			Object result = resolveExpression(argValues[i]);
			if (result == null) {
				result = cache.get(argNames[i]);
			}
			paramMap.put(argNames[i], result);
		}
		putTreeAttribute(cacheMapKey, paramMap);
	}
	
	


	/** 
	 * Returns a full system path for a file path given relative to the web project
	 */
	protected static String getRealPath(String relPath) {
		String path = relPath;
		try {
			URL url =
				FacesContext.getCurrentInstance()
					.getExternalContext()
					.getResource(
					relPath);
			if (url != null) {
				path = url.getPath();
			}
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		return path;
	}
	
	/** 
	 * Returns an InputStream for a resource at the given path
	 */
	protected static InputStream getResourceInputStream(String relPath) {
		return FacesContext.getCurrentInstance().getExternalContext().getResourceAsStream(relPath);
	}
	
	protected void logException(Throwable throwable) {
		StringWriter stringWriter = new StringWriter();
		PrintWriter printWriter = new PrintWriter(stringWriter);
		throwable.printStackTrace(printWriter);
		log(stringWriter.toString());
	}

	protected void log(String message) {
		System.out.println(message);
	}

	public Map getApplicationScope() {
		return getFacesContext().getExternalContext().getApplicationMap();
	}

	public FacesContext getFacesContext() {
		return FacesContext.getCurrentInstance();
	}

	public Map getRequestParam() {
		return getFacesContext().getExternalContext().getRequestParameterMap();
	}

	public Map getRequestScope() {
		return getFacesContext().getExternalContext().getRequestMap();
	}

	public Map getSessionScope() {
		return getFacesContext().getExternalContext().getSessionMap();
	}

	/**  Resolve all parameters passed in via the argNames/argValues array pair, and add them to the provided paramMap. If a parameter can not be resolved, then it will attempt to be retrieved from a cachemap stored using the cacheMapKey
	 */
	public void resolveParams(DataObject paramDataObject, String[] argNames,
			String[] argValues, String cacheMapKey) {
	
		if (paramDataObject == null)
			return;
		Object rawCache = getTreeAttribute(cacheMapKey);
		DataObject cache = paramDataObject;
		if (rawCache instanceof DataObject) {
			cache = (DataObject) rawCache;
		}
		for (int i = 0; i < argNames.length; i++) {
			Object result = resolveExpression(argValues[i]);
			if (result == null) {
				result = cache.get(argNames[i]);
			}
			Property property = paramDataObject.getType().getProperty(
					argNames[i]);
			if (property != null) {
				result = TypeCoercionUtil.coerceType(property.getType()
						.getInstanceClass().getName(), result);
			}
			paramDataObject.set(argNames[i], result);
		}
		putTreeAttribute(cacheMapKey, paramDataObject);
	}

	/** Retrieve the root object of the given data object.
	 */
	public DataObject getRootDataObject(DataObject dataObject) {
		return dataObject.getDataGraph().getRootObject();
	}

	/** Retrieve the root object of the given data list.
	 */
	public DataObject getRootDataObject(List dataList) {
		return (DataObject) ((EcoreEList) dataList).getEObject();
	}

	/** Set unique URI for an EPackage
	 */
	public static void initSchema(String fileName, EClass eClass) {
	
		EPackage myPackage = eClass.getEPackage();
		StringTokenizer uriTokenizer = new StringTokenizer(fileName, "/\\ -");//$NON-NLS-1$
	
		StringBuffer packName = new StringBuffer("datagraph.ecore"); //$NON-NLS-1$
		while (uriTokenizer.hasMoreTokens()) {
			String element = uriTokenizer.nextToken();
	
			//Last is saved for name
			if (uriTokenizer.hasMoreElements()) {
				packName.append('.');
				packName.append(element);
			} else if (element != null) {
				if (element.indexOf('.') != -1) {
					element = element.substring(0, element.indexOf('.'));
				}
				myPackage.setName(element);
			}
		}
	
		myPackage.setNsURI(packName.toString());
	
	}

}