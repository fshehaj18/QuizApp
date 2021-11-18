package com.example.fridisupermarket;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import view.Login;

import java.io.IOException;

public class Main extends Application {
    @Override
    public void start(Stage stage) throws Exception {
        new Login().start(stage);
    }

    public static void main(String[] args) {
        launch();
    }
}