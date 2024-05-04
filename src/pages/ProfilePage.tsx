import { MdOutlineAdd } from "react-icons/md"
import PageHeader from "../components/PageHeader"
import PageWrapper from "../components/PageWrapper"
import { BUTTON_ICON_SIZE, TAB_BREAKPOINT } from "../constants/appConstants"
import { LargeBtn } from "../components/LargeBtn"
import { PageTitle, useDocumentTitle } from "../utils/pageTitle";
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import DeleteModal from '../components/DeleteModal';
import ProfileModal from "../components/ProfileModal";


const ProfilePage: React.FC = () => {
  useDocumentTitle(PageTitle.Profile);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleDelete = () => {
    // Your delete logic here
    setIsDeleteModalOpen(false);

    // const handleAddProfile = () => {
    //   // Your save logic here
    //   setIsProfileModalOpen(false);
    };
    return (
      <PageWrapper heading={"Welcome to your Profile"} subHeading={"profiles"}>
        <PageHeader
          header="Profiles"
          loading={false}
          btn={true}
          text="Create Profile"
          modalHeader="Add Profile"
          size="4xl"
          childComp={
            window.innerWidth >= TAB_BREAKPOINT ? (
              <MdOutlineAdd size={BUTTON_ICON_SIZE} />
            ) : undefined
          }
          modalChildren={
            <LargeBtn text="Add Order" bg={""} color={""} loading={false} />
          }
        ></PageHeader>
        <div>
          <Button onClick={() => setIsDeleteModalOpen(true)}>
            Delete Profile
          </Button>
          <DeleteModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onDelete={handleDelete}
          />
        </div>
        <div>
        <Button onClick={() => setIsProfileModalOpen(true)}>
          Edit Profile
        </Button>
        <ProfileModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          isEditing={false}
        />
        </div>
      </PageWrapper>
    );
  };

export default ProfilePage;