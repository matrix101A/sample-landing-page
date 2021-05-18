import React, { useState, useEffect } from "react";
import "./banners.css";
import { db } from "../firebase";
import BlogCard from "./BlogCard";
function ServiceTable(props) {
  const [blogs, setBlog] = useState([{}]);
  useEffect(() => {
    var docRef = db.collection("blogs").doc("featured");

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setBlog(doc.data().blogs);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, [props.location]);

  return (
    <div>
      {blogs.map((blog) => {
        if (blog.id) {
          return <BlogCard blog={blog} />;
        } else return "";
      })}
    </div>
  );
}
export default ServiceTable;
