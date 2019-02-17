/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Grid,Row,Col} from 'react-native-easy-grid';

export default class StackOverflow extends Component {
constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
        dataSource: ds.cloneWithRows(["item"])
    };
}

render() {
    return (
        <View style={{ flex: 1, padding: 50 }}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={rowData => (
                    <Grid>
                        <Row style={styles.container}>
                            <Col
                                style={[
                                    styles.container,
                                    { backgroundColor: "yellow" }
                                ]}
                            >
                                <Text>{rowData}</Text>
                            </Col>
                            <Col
                                style={[
                                    styles.container,
                                    { backgroundColor: "green" }
                                ]}
                            >
                                <Text>{rowData}</Text>
                            </Col>
                        </Row>
                        <Row style={styles.container}>
                            <Col
                                style={[
                                    styles.container,
                                    { backgroundColor: "skyblue" }
                                ]}
                            >
                                <Text>{rowData}</Text>
                            </Col>
                            <Col
                                style={[
                                    styles.container,
                                    { backgroundColor: "orange" }
                                ]}
                            >
                                <Text>{rowData}</Text>
                            </Col>
                        </Row>
                    </Grid>
                )}
            />
        </View>
    );
}
}

const styles = StyleSheet.create({
container: {
    alignItems: "center",
    justifyContent: "center"
}
});