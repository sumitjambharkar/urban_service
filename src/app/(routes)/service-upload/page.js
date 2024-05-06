"use client";
import { useRef, useState } from "react";
import axios from "axios";
import config from "@/config";
import { Editor } from "@tinymce/tinymce-react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Page = () => {
  const editorRef = useRef(null);
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    slug: "",
    seoTitle: "",
    seoDescription: "",
    service:""
  });
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [seoTitleError, setSeoTitleError] = useState("");
  const [seoDescriptionError, setSeoDescriptionError] = useState("");
  
 
  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Auto-generate slug if name is 'seoTitle' or 'slug' is provided
    const generateSlug = (inputValue) =>
      inputValue && inputValue.toLowerCase().replace(/\s+/g, "-");

    setData((prevData) => {
      const newData = {
        ...prevData,
        [name]: value,
      };

      if (name === "seoTitle") {
        if (value.length > 59) {
          setSeoTitleError("Maximum character limit exceeded 59");
        } else {
          setSeoTitleError("");
        }
      }
      if (name === "seoDescription") {
        if (value.length > 135) {
          setSeoDescriptionError("Maximum character limit exceeded 135");
        } else {
          setSeoDescriptionError("");
        }
      }

      if (name === "seoTitle" && value) {
        newData.slug = generateSlug(value);
      } else if (name === "slug" && value) {
        newData.slug = generateSlug(value);
      }

      return newData;
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    formData.append("service", data.service);
    formData.append("name", data.name);
    formData.append("slug", data.slug);
    formData.append("content", content);
    formData.append("seoTitle", data.seoTitle);
    formData.append("seoDescription", data.seoDescription);
    formData.append("file", file);

    try {
      await axios.post(`${config}/api/service`, formData);
      Swal.fire({
        title: "Good job!",
        text: "Added Blog!",
        icon: "success",
      });
      router.push("/service");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="blog-container">
      <div className="form-group-full">
        <div className="form-group">
          <select name="service"
            value={data.service}
            onChange={handleInputChange} className="input-field" >
            <option value="Home-Cleaning">Home Cleaning</option>
            <option value="Chandelier-Cleaning">Chandelier Cleaning</option>
            <option value="House-Keeping">House Keeping</option>
            
          </select>
        </div>
        <div className="form-group">
          <input
            name="name"
            value={data.name}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Focus Keyword"
            type="text"
          />
        </div>
      </div>
      <div className="form-group-full">
        <div className="form-group">
          <Editor
            apiKey="qo462wysj4yv99by9ki4sbxc7rxjhjecbsq8kqm6vh8ayrk0"
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: "100vh",
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            value={content}
            onEditorChange={(value) => setContent(value)}
          />
        </div>
      </div>
      <div className="form-group-full">
        <div className="form-group">
          <input
            name="seoTitle"
            maxlength={60}
            value={data.seoTitle}
            onChange={handleInputChange}
            className="input-field"
            placeholder="SEO Title"
            type="text"
          />
          <span style={{ color: "red" }}>{seoTitleError}</span>
        </div>
      </div>
      <div className="form-group-full">
        <div className="form-group">
          <input
            name="seoDescription"
            value={data.seoDescription}
            onChange={handleInputChange}
            className="input-field"
            placeholder="SEO Description"
            type="text"
          />
          <span style={{ color: "red" }}>{seoDescriptionError}</span>
        </div>
      </div>
      <div className="form-group-full">
        <div className="form-group">
          <input
            name="slug"
            value={data.slug}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Slug"
            type="text"
          />
        </div>
      </div>
      <div className="form-group-full">
        <div className="form-group">
          <input
            onChange={(e) => setFile(e.target.files[0])}
            className="file-input"
            type="file"
          />
        </div>
        <div className="form-group">
          <input
            onClick={handleSubmit}
            className="submit-button"
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
