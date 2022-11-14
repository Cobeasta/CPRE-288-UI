package ui.view;

import javax.swing.*;
import java.awt.*;

/**
 * @author Coby Konkol
 */

public class GuiWindow {

    private JFrame jFrame;
    private int width;
    private int height;

    private Map map;

    public GuiWindow(int width, int height){
        this.width = width;
        this.height = height;
        jFrame = new JFrame();

        jFrame.setSize(width, height);
        jFrame.setTitle("CPRE 288 GUI");
        jFrame.setLayout(new CardLayout());
        jFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        map = new Map();
        jFrame.add(map);
        jFrame.setVisible(true);



    }
}
