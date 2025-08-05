import { ErrorMessage } from "@hookform/error-message";
import Dropzone from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";

import { DropzoneFileUploadFieldFieldSchema } from "./schema";

export default function DropzoneFileUploadField() {
  const { control } = useFormContext<DropzoneFileUploadFieldFieldSchema>();

  return (
    <Controller
      name="dropzoneFileUploadField"
      control={control}
      render={({ field: { onChange, value = [], ...field } }) => (
        <>
          <Dropzone onDropAccepted={onChange}>
            {({ getRootProps, getInputProps, isDragActive }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />

                {isDragActive && <p>Drop the files here ...</p>}

                {!isDragActive && (
                  <p>Drag and drop some files here, or click to select files</p>
                )}
              </div>
            )}
          </Dropzone>

          <ol>
            {value.map((file, i) => (
              <li key={i}>
                {file.name}
                <br />
                {file.size} bytes
              </li>
            ))}
          </ol>

          <ErrorMessage name={field.name} />
        </>
      )}
    />
  );
}
