import ENUM from "../data/Enums";

class Project {
    constructor(id, title, investor, description, image, tags, location, date, warehouseSpace, area, officeSpace, detailPageImage, otherImages) {
        this.id = id;
        this.title = title;
        this.investor = investor;
        this.description = description;
        this.image = image;
        this.location = location;
        this.date = date;
        this.warehouseSpace = warehouseSpace;
        this.area = area;
        this.officeSpace = officeSpace;
        this.detailPageImage = detailPageImage;
        this.otherImages = otherImages;
        this.tags = [ENUM.Filters.ALL].concat(tags);
    }
}

export default Project;