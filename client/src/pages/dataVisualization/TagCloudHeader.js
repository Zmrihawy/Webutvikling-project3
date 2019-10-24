import React from "react";
import Typography from "@material-ui/core/Typography";

const TagCloudHeader = props => {
  return (
    <div>
      <Typography variant="h3" style={{ marginTop: "30px" }}>
        Data Visualization - Tag cloud
      </Typography>
      <Typography variant="subtitle1" style={{ marginTop: "30px" }}>
        Created by counting components for each producer and category. More
        components equal larger font.
      </Typography>
    </div>
  );
};

export default TagCloudHeader;
