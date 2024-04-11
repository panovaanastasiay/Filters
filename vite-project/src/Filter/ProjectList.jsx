import { images} from "./Images";

const ProjectList = ({ images }) => {
    return (
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image.img} alt={image.category} />
        ))}
      </div>
    );
  };
  
  export default ProjectList;