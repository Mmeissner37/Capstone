import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';


const Images = new CloudinaryImage ('sample', {cloudName: 'dsecrivmq'}).resize(fill().width(100).height(150));


return (
    <div>
        <AdvancedImage cldImge={myImage} />
    </div>
)