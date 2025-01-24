"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const [Details, setDetails] = useState("");

  const id = useParams().slug;

  useEffect(() => {
    const getBlogDetail = async () => {
      try {
        const data = await axios.get(
          `http://localhost:4000/getblogDetail/${id}`
        );
        setDetails(data.data.data);
      } catch (error) {
        window.alert(error);
      }
    };
    getBlogDetail();
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{Details.title}</h1>
      <p className="text-gray-600 mb-2">{Details.blogType}</p>

      <p className="text-gray-500 mb-4">
        {new Date(Details.date).toLocaleDateString()}
      </p>
      <div className="mb-4 flex justify-center">
        <img
          src={`http://localhost:4000/uploads/${Details.file}`}
          alt={Details.title}
          className="w-2/4 h-54 rounded-lg shadow-lg"
        />
      </div>
      <p className="text-gray-700 mb-4 italic">
        {"___________" + Details.description}
      </p>

      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: Details.content,
        }}
      ></div>
    </div>
  );
}
2;
