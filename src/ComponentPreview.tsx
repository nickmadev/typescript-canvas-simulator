import { Component } from "./componentTypes";
import { drawComponent } from "./helpers/index";

const ComponentPreview = ({ component }: { component: Component }) => {
	// TODO: Implement Me!
	return (
		<div
			style={{
				position: "relative",
				width: component.frame.width,
				height: component.frame.height,
			}}
		>
			{drawComponent(component)}
		</div>
	);
};

export default ComponentPreview;
