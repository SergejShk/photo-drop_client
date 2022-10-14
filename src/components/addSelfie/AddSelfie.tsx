import { useState } from "react";
import {
  Avatar,
  BtnAddAvatar,
  Text,
  Title,
  Wrapper,
  WrapperAvatar,
} from "./AddSelfie.styled";

import avatar from "../../assets/avatar.png";
import { AiFillPlusCircle } from "react-icons/ai";

import axios from "axios";
import Uppy from "@uppy/core";
import AwsS3 from "@uppy/aws-s3";
import Webcam from "@uppy/webcam";
import { DashboardModal } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

const AddSelfie: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsModal(true);
  };

  const uppy = new Uppy({
    meta: { type: "avatar" },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true,
  });
  uppy.use(AwsS3, {
    async getUploadParameters(file: any): Promise<any> {
      try {
        const { data } = await axios.post(`/client/selfie`, {
          extension: file.name.split(".").reverse()[0],
        });

        return {
          method: data.data.method,
          url: data.data.url,
          fields: data.data.fields,
          headers: {
            "Content-Type": file.type,
          },
        };
      } catch (error) {
        console.log(error);
      }
    },
  });
  uppy.use(Webcam, {
    modes: ["picture"],
    mirror: true,
    videoConstraints: {
      facingMode: "user",
    },
    // mobileNativeCamera: isMobile({ tablet: true }),
  });

  return (
    <Wrapper>
      <Title>Add a selfie</Title>
      <Text>A selfie allows your photos to be synced with your account.</Text>
      <WrapperAvatar>
        <Avatar src={avatar} alt="avatar" />
        <BtnAddAvatar type="button" onClick={handleClick}>
          <AiFillPlusCircle />
        </BtnAddAvatar>
        <DashboardModal
          uppy={uppy}
          closeModalOnClickOutside
          open={isModal}
          onRequestClose={() => setIsModal(false)}
          plugins={["Webcam"]}
        />
      </WrapperAvatar>
    </Wrapper>
  );
};

export default AddSelfie;
