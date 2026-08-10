"use client"
import { useRef, useState } from "react";
import api from '@/libs/api';
import { Editor } from "@tinymce/tinymce-react";
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2';
import {
  blogContainerClass,
  formGroupFullClass,
  formGroupBlockClass,
  inputFieldClass,
  fileInputClass,
  submitButtonClass,
} from '@/app/uiClasses';

const Page = () => {
  const editorRef = useRef(null);
  const router = useRouter()
  const [data, setData] = useState({
    name: "",
    slug: "",
    seoTitle: "",
    seoDescription: "",
  });
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [seoTitleError, setSeoTitleError] = useState('');
  const [seoDescriptionError, setSeoDescriptionError] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Auto-generate slug if name is 'seoTitle' or 'slug' is provided
    const generateSlug = (inputValue) => inputValue && inputValue.toLowerCase().replace(/\s+/g, '-');
  
    setData(prevData => {
      const newData = {
        ...prevData,
        [name]: value
      };
  
      if (name === 'seoTitle') {
        if (value.length > 59) {
          setSeoTitleError('Maximum character limit exceeded 59');
        } else {
          setSeoTitleError('');
        }
      }
      if (name === 'seoDescription') {
        if (value.length > 135) {
          setSeoDescriptionError('Maximum character limit exceeded 135');
        } else {
          setSeoDescriptionError('');
        }
      }

      if (name === 'seoTitle' && value) {
        newData.slug = generateSlug(value);
      } else if (name === 'slug' && value) {
        newData.slug = generateSlug(value);
      }
  
      return newData;
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('slug', data.slug);
    formData.append('content', content);
    formData.append('seoTitle', data.seoTitle);
    formData.append('seoDescription', data.seoDescription);
    formData.append('file', file);

    try {
      await api.post("/api/blog", formData);
      Swal.fire({
        title: "Good job!",
        text: "Added Blog!",
        icon: "success"
      });
      router.push("/blog");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={blogContainerClass}>
      <div className={formGroupFullClass}>
        <div className={formGroupBlockClass}>
          <input name="name" value={data.name} onChange={handleInputChange} className={inputFieldClass} placeholder='Focus Keyword' type='text'/>
        </div>
      </div>
      <div className={formGroupFullClass}>
        <div className={formGroupBlockClass}>
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
            onEditorChange={(value) =>
              setContent(value)
            }
          />
        </div>
      </div>
      <div className={formGroupFullClass}>
        <div className={formGroupBlockClass}>
          <input name="seoTitle" maxlength={60} value={data.seoTitle} onChange={handleInputChange} className={inputFieldClass} placeholder='SEO Title' type='text'/>
          <span style={{color:"red"}}>{seoTitleError}</span>
        </div>
      </div>
      <div className={formGroupFullClass}>
        <div className={formGroupBlockClass}>
          <input name="seoDescription"  value={data.seoDescription} onChange={handleInputChange} className={inputFieldClass} placeholder='SEO Description' type='text'/>
          <span style={{color:"red"}}>{seoDescriptionError}</span>
        </div>
      </div>
      <div className={formGroupFullClass}>
        <div className={formGroupBlockClass}>
          <input name="slug" value={data.slug} onChange={handleInputChange} className={inputFieldClass} placeholder='Slug' type='text'/>
        </div>
      </div>
      <div className={formGroupFullClass}>
        <div className={formGroupBlockClass}>
          <input onChange={(e)=>setFile(e.target.files[0])} className={fileInputClass} type='file'/>
        </div>
        <div className={formGroupBlockClass}>
          <input onClick={handleSubmit} className={submitButtonClass} type='submit' value="Submit"/>
        </div>
      </div>
    </div>
  )
}

export default Page;