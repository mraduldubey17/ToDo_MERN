import React from "react";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
const ToDoCards=({title,body,id,delid,display,updateId,tobeUpdate})=>{
    return <div className="p-3 todo-card">
        <div>
            <h4>{title}</h4>
            <p className="todo-card-p">
               {body.split("",78)}...
            </p>
        </div>
        <div className="d-flex justify-content-between ">
        <div className="d-flex justify-content-between align-items-center card-icon-head px-2 py-1"
        onClick={()=>{
            display("block");
            tobeUpdate(updateId);
        }}
        >
        <GrUpdate  className="card-icons"/> Update
        </div>
        <div className="d-flex justify-content-between align-items-center card-icon-head px-2 py-1 text-danger"
        onClick={()=>{
            delid(id);
        }}
        >
        <MdDelete  className="card-icons"/>Delete
        </div>
    </div>
    </div>
};

export default ToDoCards;