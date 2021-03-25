import React, { useEffect } from "react";
import {BrowserRouter} from "react-router-dom";
import { Route } from 'react-router';

import {Grid} from "./Styles";
import Main from "./Main";
import Write from "./Write";
import {firestore} from "./firebase";
import Month from "./Month";




function App() {
  //함수형 컴포넌트에서는 componentDidMount대신 useEffect사용할 수 있음
  useEffect(() => {
    const Todo = firestore.collection("Todo");

    Todo.doc("A6vPJU6Ff5T615RtFawH").get().then((doc) => {
      if(doc.exists){
        console.log(doc.data());
      }
    });
    Todo
    .get()
    .then((docs) => {
      let Todo_data =[];
      docs.forEach((doc) => {
        console.log(doc);
        console.log(doc.data());
        console.log(doc.id);
        if (doc.exists){
          Todo_data = [...Todo_data, {id: doc.id, ...doc.data() }];
        }
      });

      console.log(Todo_data)
    });

// 파이어베이스 데이터 추가하기연습 // 성공!!

    // Todo.add({
    //   "2021-03-025": [
    //     {
    //       todo_id: 111,
    //       datetime: "2021-03-25 10:10:00",
    //       contents: "레고 조립하기",
    //       completed: false,
    //     },
    //     {
    //       todo_id: 1555551,
    //       datetime: "2021-03-025 10:15:00",
    //       contents: "스웨터 완성하기",
    //       completed: true,
    //     },
    //   ]}).then((docRef)=> {
    //   console.log(docRef);
    //   console.log(docRef.id)
    // });

  // Todo.doc("Vya4ZtAdPf0hTGFDa4IP.2021.").update({})

  Todo.doc("Vya4ZtAdPf0hTGFDa4IP").delete().then(docRef => {
    console.log("지웠어요!")
  });





  });


  return (
    <Grid is_root bg="#ddd">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/write" exact component={Write} />
        <Route path="/month" exact component={Month} />
      </BrowserRouter>
    </Grid>
  );
}

export default App;
