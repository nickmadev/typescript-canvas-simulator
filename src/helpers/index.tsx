import { Component, ContainerComponent } from "../componentTypes";
import { Color } from "../componentTypes";
import React from "react";

const rgbColor = (color: Color) => {
	return `rgba(${color.r * 255},
		${color?.g * 255},
		${color?.b * 255},
		${color?.a * 255}
	)`;
};

export const drawComponent = (component: Component, isChild = false) => {
	const baseStyle = {
		position: "absolute",
		left: component.frame.x,
		top: component.frame.y,
		width: component.frame.width,
		height: component.frame.height,
	};

	if (component.type === "container") {
		const fillComponentStyle = {
			border: `${component.border?.width || 0}px solid ${
				component.border && rgbColor(component.border.color)
			}`,
			backgroundColor:
				component.backgroundColor && rgbColor(component.backgroundColor),
		};
		const styleVariable = {
			...baseStyle,
			...fillComponentStyle,
			borderRadius: `${component.cornerRadius}px`,
		} as React.CSSProperties;

		return (
			<>
				<div style={styleVariable}></div>
				<div>
					{component.children.map((child) => drawComponent(child, true))}
				</div>
			</>
		);
	} else if (component.type === "text") {
		const styleVariable = {
			...baseStyle,
			fontFamily: component.fontFamily,
			fontSize: component.fontSize,
			fontWeight: component.fontWeight,
			color: component.textColor && rgbColor(component.textColor),
		} as React.CSSProperties;
		return (
			<>
				<div style={styleVariable}>{component.content}</div>
			</>
		);
	} else if (component.type === "rectangle") {
		const fillComponentStyle = {
			border: `${component.border?.width || 0}px solid ${
				component.border && rgbColor(component.border.color)
			}`,
			backgroundColor:
				component.backgroundColor && rgbColor(component.backgroundColor),
		};
		const styleVariable = {
			...baseStyle,
			...fillComponentStyle,
			borderRadius: component.cornerRadius,
		} as React.CSSProperties;
		return (
			<>
				<div style={styleVariable}></div>
			</>
		);
	} else if (component.type === "ellipse") {
		const fillComponentStyle = {
			border: `${component.border?.width || 0}px solid ${
				component.border && rgbColor(component.border.color)
			}`,
			backgroundColor:
				component.backgroundColor && rgbColor(component.backgroundColor),
		};
		const styleVariable = {
			...baseStyle,
			...fillComponentStyle,
			borderRadius: "50%",
		} as React.CSSProperties;
		return (
			<>
				<div style={styleVariable}></div>
			</>
		);
	}
};
