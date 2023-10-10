import React from "react"; 
import { 
Box, 
Container, 
Row, 
Column, 
FooterLink, 
Heading, 
} from "./FooterStyles"; 

const Footer = () => { 
return ( 
	<Box> 
	<h1 style={{ color: "white", 
				textAlign: "center", 
				marginTop: "-50px" }}> 
		gsijgjsjkgsgjksgjksgjsgj
	</h1> 
	<Container> 
		<Row> 
		<Column> 
			<Heading>About Us</Heading> 
			
		</Column> 
		<Column> 
			<Heading>Services</Heading> 
			 
		</Column> 
		<Column> 
			<Heading>Contact Us</Heading> 
			
		</Column> 
		<Column> 
			<Heading>Social Media</Heading> 
			
		</Column> 
		</Row> 
	</Container> 
	</Box> 
); 
}; 
export default Footer; 
