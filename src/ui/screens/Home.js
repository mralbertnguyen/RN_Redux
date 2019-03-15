import React, { Component } from "react";
import { View, ListView, Text } from "react-native";
import {
  Container,
  Header,
  Fab,
  Icon,
  List,
  Content,
  Button,
  ListItem
} from "native-base";
import { home } from "../../styles/screenStyles";
import ItemListViewCus from "../components/ItemListViewCus";

const data = [
  {
    title: "name 1",
    desc: "desc 1"
  },
  {
    title: "name 1",
    desc: "desc 1"
  },
  {
    title: "name 1",
    desc: "desc 1"
  },
  {
    title: "name 1",
    desc: "desc 1"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      isActiveFab: "true",
      listViewData: data
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return (
      <Container>
        <Header />

        <View style={home.container}>
          {/* List to show note list */}
          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data => (
              <ItemListViewCus title={data.title} desc={data.desc} />
            )}
            renderLeftHiddenRow={data => (
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>
            )}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button
                full
                danger
                onPress={_ => this.deleteRow(secId, rowId, rowMap)}
              >
                <Icon active name="trash" />
              </Button>
            )}
          />
          {/* Float button to add new note */}
          <Fab
            active={this.state.isActiveFab}
            style={home.fabContainer}
            position="bottomRight"
            onPress={() => this.onPressFloatButton()}
          >
            {/* Icon add  */}
            <Icon style={home.fabIcon} name="add" />
          </Fab>
        </View>
      </Container>
    );
  }

  onPressFloatButton = () => {
    // Do move to add new note
    console.log("Pressed add new note");
  };
}

export default Home;
