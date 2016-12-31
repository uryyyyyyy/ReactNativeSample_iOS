//@flow
import React, {Component} from "react";
import Counter from "./counter/Root";
import {Provider} from "react-redux";
import store from "./Store";
import {Scene, Router} from "react-native-router-flux";
import {TopPage} from "./TopPage";
import {Scene1} from "./navigator/Scene1";
import {Scene2} from "./navigator/Scene2";
import {StyleSheet, Text, View, Button} from "react-native";

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    backgroundColor: 'rgb(50, 207, 202)',
  },
});

export class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              initial
              key="topPage"
              component={TopPage}
              title="Login"
            />
            <Scene
              key="counter"
              component={Counter}
              title="Counter"
            />
            <Scene
              key="scene1"
              component={Scene1}
              title="Scene1"
            />
            <Scene
              key="scene2"
              component={Scene2}
              title="Scene2"
            />
            <Scene key="popup_root" direction="vertical">
              <Scene
                initial
                key="scene2_popup"
                component={Scene2}
                title="Scene2（pop up）"
              />
            </Scene>

            <Scene
              key="tabbar" tabs
              tabBarStyle={styles.tabBar} >
              <Scene
                key="pageA"
                initial
                component={Scene1}
                title="PageA"
              />
              <Scene
                key="pageA2"
                component={Scene1}
                title="PageA2"
              />
              <Scene
                key="pageA3"
                component={Scene1}
                title="PageA3"
              />
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
