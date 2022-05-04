import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@alura.rfe62.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;