"use client";

import { SessionInterface } from "@/common.types";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import Formfield from "./Formfield";
import { categoryFilters } from "@/constants";
import CustomMenu from "./CustomMenu";

type Props = {
  type: string;
  session: SessionInterface;
};

const ProjectForm = ({ type, session }: Props) => {
  const handleFormSubmit = (e: React.FormEvent) => {};

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      return alert("Please select an image file");
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      handleStateChange("image", result);
    };
  };

  const handleStateChange = (fieldName: string, value: string) => {
    setform((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setform] = useState({
    title: "",
    description: "",
    image: "",
    liveSiteUrl: "",
    githubUrl: "",
    category: "",
  });
  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.image && "Choose a poster for your project"}

          <input
            id="image"
            type="file"
            accept="image/*"
            required={type === "create"}
            onChange={handleChangeImage}
          />
          {form.image && (
            <Image
              src={form?.image}
              className="sm:p-10 object-contain z-20"
              alt="Project Poster"
              fill
            />
          )}
        </label>
      </div>

      <Formfield
        title="Title"
        state={form.title}
        placeholder="Codaaable"
        setState={(value) => handleStateChange("title", value)}
      />
      <Formfield
        title="Description"
        state={form.description}
        placeholder="Showcase and discover remarkable developer projects."
        setState={(value) => handleStateChange("description", value)}
      />
      <Formfield
        type="url"
        title="Website URL"
        state={form.liveSiteUrl}
        placeholder="https://Codaaable...."
        setState={(value) => handleStateChange("liveSiteUrl", value)}
      />
      <Formfield
        type="url"
        title="Github URL"
        state={form.githubUrl}
        placeholder="Your GitHub URL..."
        setState={(value) => handleStateChange("githubUrl", value)}
      />

      <CustomMenu
        title="Catagory"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange("category", value)}
      />

      <div className="flexStart w-full">
        <button>Create</button>
      </div>
    </form>
  );
};

export default ProjectForm;
