// const express = require('express');
// const env=require('dotenv');

import env from 'dotenv';
import express from 'express'; //modern syntax (ES6)

env.config();

const app = express();
const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get('/twitter',(req,res)=>{
    res.send('sanjaydotcom');
})

app.get('/login',(req,res)=>{
    res.send('<h1>Hello Sanjay Rai</h1>');
})

app.get('/api/jokes',(req,res)=>{
  const jokes =  [
        {
          "id": 1,
          "title": "Introduction to JSON",
          "content": "JSON (JavaScript Object Notation) is a lightweight data interchange format."
        },
        {
          "id": 2,
          "title": "Arrays in JavaScript",
          "content": "Arrays are a type of data structure that allows you to store multiple items in a single variable."
        },
        {
          "id": 3,
          "title": "Objects in JavaScript",
          "content": "Objects are collections of key-value pairs, where each key is a unique identifier for a value."
        },
        {
          "id": 4,
          "title": "Functions in JavaScript",
          "content": "Functions are reusable blocks of code that perform a specific task."
        },
        {
          "id": 5,
          "title": "Variables in JavaScript",
          "content": "Variables are containers for storing data values."
        },
        {
          "id": 6,
          "title": "Conditional Statements in JavaScript",
          "content": "Conditional statements allow you to execute different pieces of code depending on certain conditions."
        },
        {
          "id": 7,
          "title": "Loops in JavaScript",
          "content": "Loops are used to repeatedly execute a block of code until a certain condition is met."
        },
        {
          "id": 8,
          "title": "DOM Manipulation in JavaScript",
          "content": "The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML and XML documents."
        },
        {
          "id": 9,
          "title": "Event Handling in JavaScript",
          "content": "Event handling is the process of capturing and responding to events that occur in a web application."
        },
        {
          "id": 10,
          "title": "AJAX in JavaScript",
          "content": "AJAX (Asynchronous JavaScript and XML) is a technique for creating fast and dynamic web pages."
        }
      ]
      
      res.send(jokes);
})

app.listen(port,()=>{
    console.log(`Server is running at port : ${port}`);
})
