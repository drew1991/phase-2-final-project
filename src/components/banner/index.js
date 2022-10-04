import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescritpion,
  BannerImage,
  //   BannerImage,
  BannerTitle,
} from "../../styles/banner";
export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/images.png" />
      <BannerContent>
        <Typography variant="h6">Huge collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescritpion variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta velit
          architecto molestiae illum fugiat repudiandae odio non incidunt minima
          inventore!
        </BannerDescritpion>
      </BannerContent>
    </BannerContainer>
  );
}
