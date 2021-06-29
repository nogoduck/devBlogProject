import { createGlobalStyle } from "styled-components";
import SourceSansProRegularFont from "./SourceSansPro-Regular.ttf";
export default createGlobalStyle`
    @font-face{
    font-family:'SourceSansPro';
    src: local('SourceSansPro'),
    url(${SourceSansProRegularFont}) format('ttf');
    font-weight: 300; 		
    font-style: normal;
    }

`;
