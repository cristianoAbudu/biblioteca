package com.ibm.faces.sdo;

import java.io.PrintStream;
import java.util.List;

import javax.faces.el.PropertyNotFoundException;
import javax.faces.el.PropertyResolver;

import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.util.EcoreEList;

import com.ibm.websphere.sdo.DataObjectAccessBean;
import com.ibm.websphere.sdo.access.util.TypeCoercionUtil;
import org.apache.taglibs.standard.lang.jstl.BeanInfoManager;
import org.apache.taglibs.standard.lang.jstl.BeanInfoProperty;
import org.apache.taglibs.standard.lang.jstl.Coercions;
import org.apache.taglibs.standard.lang.jstl.Logger;
import commonj.sdo.DataObject;
import commonj.sdo.Property;

public class SDOPropertyResolver extends PropertyResolver {

	PropertyResolver oldPropResolver;

	/*
	 * Zero-argument array
	 */
	private static final Object[] sNoArgs = new Object[0];

	/*
	 * @generated If you would not like our tools to modify this method in the
	 * future remove this javadoc directive
	 * 
	 * @param propResolver Parent Resolver
	 */
	public SDOPropertyResolver(PropertyResolver propResolver) {
		oldPropResolver = propResolver;
	}

	/*
	 * @generated If you would not like our tools to modify this method in the
	 * future remove this javadoc directive
	 * 
	 * @see javax.faces.el.PropertyResolver#getValue(java.lang.Object,
	 *      java.lang.Object)
	 */
	public Object getValue(Object base, Object property)
			throws PropertyNotFoundException {
		try {
			if (base instanceof DataObject) {
				if (property != null) {
					//First try custom getter...
					try {
						return invokeCustomGetter(base, property);
					} catch (PropertyNotFoundException pne) {
						//otherwise try the DataObejct getter
						return (((DataObject) base).get(property.toString()));
					}
				}
			}
		} catch (NoClassDefFoundError ncdfe) {
			// wdo jars are not available
		}

		if (oldPropResolver != null) {
			return oldPropResolver.getValue(base, property);
		}
		throw new PropertyNotFoundException();
	}

	/*
	 * @generated If you would not like our tools to modify this method in the
	 * future remove this javadoc directive
	 * 
	 * @see javax.faces.el.PropertyResolver#getValue(java.lang.Object, int)
	 */
	public Object getValue(Object base, int index)
			throws PropertyNotFoundException {

		try {
			if (base instanceof DataObject) {
				return (((DataObject) base).get(index));
			}
		} catch (NoClassDefFoundError ncdfe) {
			// wdo jars are not available
		}

		if (oldPropResolver != null) {
			return oldPropResolver.getValue(base, index);
		}
		throw new PropertyNotFoundException();
	}

	/*
	 * @generated If you would not like our tools to modify this method in the
	 * future remove this javadoc directive
	 * 
	 * @see javax.faces.el.PropertyResolver#setValue(java.lang.Object,
	 *      java.lang.Object, java.lang.Object)
	 */
	public void setValue(Object base, Object property, Object value)
			throws PropertyNotFoundException {

		if ((base == null) || (property == null)) {
			String className = base == null ? "null" : base.getClass()
					.getName();
			throw new PropertyNotFoundException("Error setting property '"
					+ property + "' in bean of type " + className);
		}
		try {
			if (base instanceof DataObject) {
				if (property != null) {
					//First try custom setter...
					try {
						invokeCustomSetter(base, property, value);
						return;
					} catch (PropertyNotFoundException pne) {
						//otherwise try the DataObejct setter
						((DataObject) base).set(property.toString(),
								TypeCoercionUtil.coerceType(getType(base,
										property).getName(), value));
						return;
					}
				}
			}
		} catch (NoClassDefFoundError ncdfe) {
			// wdo jars are not available
		}

		if (oldPropResolver != null) {
			oldPropResolver.setValue(base, property, value);
			return;
		}
		throw new PropertyNotFoundException();
	}

	/*
	 * @generated If you would not like our tools to modify this method in the
	 * future remove this javadoc directive
	 * 
	 * @see javax.faces.el.PropertyResolver#setValue(java.lang.Object, int,
	 *      java.lang.Object)
	 */
	public void setValue(Object base, int index, Object value)
			throws PropertyNotFoundException {

		try {
			if (base instanceof DataObject) {
				((DataObject) base).set(index, TypeCoercionUtil.coerceType(
						getType(base, index).getName(), value));
				return;
			}
		} catch (NoClassDefFoundError ncdfe) {
			// wdo jars are not available
		}

		if (oldPropResolver != null) {
			oldPropResolver.setValue(base, index, value);
			return;
		}
		throw new PropertyNotFoundException();
	}

	/*
	 * @generated If you would not like our tools to modify this method in the
	 * future remove this javadoc directive
	 * 
	 * @see javax.faces.el.PropertyResolver#isReadOnly(java.lang.Object,
	 *      java.lang.Object)
	 */
	public boolean isReadOnly(Object base, Object property)
			throws PropertyNotFoundException {

		if ((base == null) || (property == null)) {
			String className = base == null ? "null" : base.getClass()
					.getName();
			throw new PropertyNotFoundException("Error testing property '"
					+ property + "' in bean of type " + className);
		}

		try {
			if (base instanceof DataObjectAccessBean) {
				if (property instanceof String) {
					return ((DataObjectAccessBean) base)
							.isReadOnly((String) property);
				} else {
					String className = base == null ? "null" : base.getClass()
							.getName();
					throw new PropertyNotFoundException("Property '" + property
							+ "' is not a String in bean of type " + className);
				}
			}
		} catch (NoClassDefFoundError ncdfe) {
			// wdo jars are not available
		} catch (Exception e) {
			throw new PropertyNotFoundException(e);
		}

		if (oldPropResolver != null) {
			return oldPropResolver.isReadOnly(base, property);
		}
		throw new PropertyNotFoundException();
	}

	/*
	 * @generated If you would not like our tools to modify this method in the
	 * future remove this javadoc directive
	 * 
	 * @see javax.faces.el.PropertyResolver#isReadOnly(java.lang.Object, int)
	 */
	public boolean isReadOnly(Object base, int index)
			throws PropertyNotFoundException {

		if (base == null) {
			throw new NullPointerException();
		}
		try {
			if (!(base instanceof DataObjectAccessBean)) {
				return oldPropResolver.isReadOnly(base, index);
			}
		} catch (NoClassDefFoundError ncdfe) {
			// wdo jars are not available
			return oldPropResolver.isReadOnly(base, index);
		}
		throw new PropertyNotFoundException();
	}

	/*
	 * @generated If you would not like our tools to modify this method in the
	 * future remove this javadoc directive
	 * 
	 * @see javax.faces.el.PropertyResolver#getType(java.lang.Object,
	 *      java.lang.Object)
	 */
	public Class getType(Object base, Object property)
			throws PropertyNotFoundException {

		if ((base == null) || (property == null)) {
			String className = base == null ? "null" : base.getClass()
					.getName();
			throw new PropertyNotFoundException("Error testing property '"
					+ property + "' in bean of type " + className);
		}

		try {
			if (base instanceof DataObject) {
				if (property != null) {
					Property prop = ((DataObject) base).getType().getProperty(
							property.toString());

					Class retClass = null;

					if (prop != null) {
						if (prop.isMany()) {
							if (base instanceof EObject) {
								retClass = EcoreEList.class;
							} else {
								retClass = List.class;
							}
						} else if (prop.getType().getInstanceClass() == null) {
							retClass = DataObject.class;
						} else {
							retClass = prop.getType().getInstanceClass();
						}
						return retClass;
					}
					//else allow base property resolver to check type.
				}
			} else if (base instanceof DataObjectAccessBean) {
				if (property instanceof String) {
					return ((DataObjectAccessBean) base)
							.getType((String) property);
				} else {

					String className = base == null ? "null" : base.getClass()
							.getName();
					throw new PropertyNotFoundException(
							"Error testing property '" + property
									+ "' in bean of type " + className);
				}
			}
		} catch (NoClassDefFoundError ncdfe) {
			// wdo jars are not available
		} catch (Exception e) {
			throw new PropertyNotFoundException(e);
		}

		if (oldPropResolver != null) {
			return oldPropResolver.getType(base, property);
		}
		throw new PropertyNotFoundException();
	}

	/*
	 * @generated If you would not like our tools to modify this method in the
	 * future remove this javadoc directive
	 * 
	 * @see javax.faces.el.PropertyResolver#getType(java.lang.Object, int)
	 */
	public Class getType(Object base, int index)
			throws PropertyNotFoundException {

		if (base == null) {
			throw new NullPointerException();
		}
		try {
			if (base instanceof DataObject) {
				Property prop = (Property) ((DataObject) base).getType()
						.getProperties().get(index);
				Class retClass = null;

				if (prop != null) {
					if (prop.isMany()) {
						if (base instanceof EObject) {
							retClass = EcoreEList.class;
						} else {
							retClass = List.class;
						}
					} else if (prop.getType().getInstanceClass() == null) {
						retClass = DataObject.class;
					} else {
						retClass = prop.getType().getInstanceClass();
					}
					return retClass;
				}
				//else allow base property resolver to check type.

			}
			if (base instanceof EcoreEList) {
				if (((EcoreEList) base).getEStructuralFeature().getEType()
						.getInstanceClass() == null) {
					return DataObject.class;
				} else {
					return ((EcoreEList) base).getEStructuralFeature()
							.getEType().getInstanceClass();
				}
			}
			if (!(base instanceof DataObjectAccessBean)) {
				return oldPropResolver.getType(base, index);
			}
		} catch (NoClassDefFoundError ncdfe) {
			// wdo jars are not available
			return oldPropResolver.getType(base, index);
		}
		throw new PropertyNotFoundException();
	}

	/*
	 * @generated If you would not like our tools to modify this method in the
	 * future remove this javadoc directive
	 * 
	 * @since v6.0.1
	 * 
	 * The DataObejct implemenation could be extened by custom Java Types. In
	 * this case we want to run any cutom code placed in the getters and
	 * setters.
	 */
	protected Object invokeCustomGetter(Object base, Object property)
			throws PropertyNotFoundException {
		String name = null;
		BeanInfoProperty bip = null;
		try {
			Logger logger = new Logger(new PrintStream(System.out));
			name = Coercions.coerceToString(property, logger);
			bip = BeanInfoManager.getBeanInfoProperty(base.getClass(), name, logger);
		} catch (Throwable t) {
			String message = "Error finding property '" + name
					+ "' from bean of type " + base.getClass().getName() + ": "
					+ t;

			throw new PropertyNotFoundException(message, t);
		}
		if (bip != null && bip.getReadMethod() != null) {
			try {
				return bip.getReadMethod().invoke(base, sNoArgs);
			} catch (Throwable t) {
				String message = "Error getting property '" + name
						+ "' from bean of type " + base.getClass().getName()
						+ ": " + t;

				throw new PropertyNotFoundException(message, t);
			}
		} else {
			// No readable property with this name
			String message = "Error getting property '" + name
					+ "' from bean of type " + base.getClass().getName();

			throw new PropertyNotFoundException(message);
		}
	}

	/*
	 * @generated If you would not like our tools to modify this method in the
	 * future remove this javadoc directive
	 * 
	 * @since v6.0.1
	 * 
	 * The DataObejct implemenation could be extened by custom Java Types. In
	 * this case we want to run any cutom code placed in the getters and
	 * setters.
	 */
	protected void invokeCustomSetter(Object base, Object property, Object value)
			throws PropertyNotFoundException {
		String name = null;
		BeanInfoProperty bip = null;
		try {
			Logger logger = new Logger(new PrintStream(System.out));
			name = Coercions.coerceToString(property, logger);
			bip = BeanInfoManager.getBeanInfoProperty(base.getClass(), name, logger);
		} catch (Throwable t) {
			// PENDING (hans) Align with std message handling
			String message = "Error finding property '" + name
					+ "' in bean of type " + base.getClass().getName() + ": "
					+ t;

			throw new PropertyNotFoundException(message, t);
		}
		if (bip != null && bip.getWriteMethod() != null) {
			try {
				bip.getWriteMethod().invoke(base, new Object[] { value });
			} catch (Throwable t) {
				String message = "Error getting property '" + name
						+ "' from bean of type " + base.getClass().getName()
						+ ": " + t;

				throw new PropertyNotFoundException(message, t);
			}
		} else {
			// No write property with this name
			String message = "Error setting property '" + name
					+ "' in bean of type " + base.getClass().getName();

			throw new PropertyNotFoundException(message);
		}
	}
}
