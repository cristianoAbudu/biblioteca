package util;

import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

class PopupListener extends MouseAdapter {
	private TabelaResultados Origem;
	PopupListener(TabelaResultados origem){
		Origem = origem;
	}
    public void mousePressed(MouseEvent e) {
        maybeShowPopup(e);
    }

    public void mouseReleased(MouseEvent e) {
        maybeShowPopup(e);
    }

    private void maybeShowPopup(MouseEvent e) {
        if (e.isPopupTrigger()) {
            Origem.getClickDireito().show(e.getComponent(),
                       e.getX(), e.getY());
        }
    }
}