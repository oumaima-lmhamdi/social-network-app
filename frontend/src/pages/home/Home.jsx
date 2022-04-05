import React from 'react'
import TopBar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./home.css";





export default function Home() {
    return (
        <div>
        <>
            <TopBar/>
            <div className="container">
              <Sidebar/>
              <Feed/>
              <Rightbar/>
              
            </div>
        </>
        </div>)
}