/************************ Links ******************/
import SidebarLink from "@/components/common/links/SidebarLink";
import IconLink from "@/components/common/links/IconLink";
import PageLink from "@/components/common/links/PageLink";
import SocialLinks from "@/components/common/links/SocialLinks";

/***************** Containers *********************/
import Page from "@/components/common/containers/Page";

/*************** Framer Motion *******************/
import SidebarDiv from "@/components/common/framer/divs/SidebarDiv";
import FadeSpan from "@/components/common/framer/spans/FadeSpan";

/******************** Logo ***********************/
import InlineLogo from "@/components/common/logo/InlineLogo";
import RoundLogo from "@/components/common/logo/RoundLogo";

/******************** Inputs *********************/
import Input from "@/components/common/inputs/Input";
import DragAndDrop from "@/components/common/inputs/DragAndDrop";
import ImageUpload from "@/components/common/inputs/ImageUpload";
import Button from "@/components/common/buttons/Button";
import ImageUploadPreview from "@/components/common/inputs/ImageUploadPreview";
import PreviewImage from "@/components/common/images/PreviewImage";
import ImagePicker from "@/components/common/inputs/ImagePicker";
import ImagePickerItem from "@/components/common/inputs/ImagePickerItem";

/******************** Feedback ********************/
import FullCircularProgress from "@/components/common/feedback/loading/FullCircularProgress";
import LoadingLogo from "@/components/common/feedback/loading/LoadingLogo";
import FullLoadingLogo from "@/components/common/feedback/loading/FullLoadingLogo";
import TimedAlert from "@/components/common/feedback/alert/TimedAlert";

/******************* Projects *********************/
import ProjectList from "@/components/common/projects/ProjectList";
import ProjectCard from "@/components/common/projects/ProjectCard";

/******************* Cards ************************/
import DoingsCard from "@/components/common/cards/DoingsCard";

/******************* Contact **********************/
import EmailForm from "@/components/common/contact/EmailForm";


export {
    /*** Logo ***/
    RoundLogo, InlineLogo,

    /*** Links ***/
    SidebarLink, SidebarDiv, SocialLinks,
    FadeSpan, IconLink, PageLink, Page,

    /*** Inputs ***/
    Input, DragAndDrop, ImageUpload, Button,
    ImageUploadPreview, PreviewImage, ImagePicker,
    ImagePickerItem,

    /*** Feedback ***/
    FullCircularProgress, LoadingLogo, TimedAlert,
    FullLoadingLogo,

    /*** Projects ***/
    ProjectList, ProjectCard,

    /*** Cards ***/
    DoingsCard,

    /*** Contact ***/
    EmailForm,
};
