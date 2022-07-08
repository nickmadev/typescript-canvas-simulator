/** A color object, where each channel is a number between 0.0 and 1.0 */
export type Color = { r: number; g: number; b: number; a: number };

/** The coordinates of a rectangle. */
export type Rect = { x: number; y: number; width: number; height: number };

/** A color and width for a component's border */
type Stroke = { color: Color; width: number };

export type Component =
	| ContainerComponent
	| TextComponent
	| RectangleComponent
	| EllipseComponent;

/** Common definition for all components */
export interface BaseComponent {
	/** A unique identifier for this component */
	id: string;
	/** A label for the component */
	name: string;
	/** The component type */
	type: "container" | "text" | "rectangle" | "ellipse";
	/**
	 * The bounding box of the component, relative to the root component.
	 * The root component will have an `x` and `y` of 0.
	 **/
	frame: Rect;
}

export interface ComponentWithFill extends BaseComponent {
	/** The background color for this component */
	backgroundColor?: Color;
	/** The border color and width for this component */
	border?: Stroke;
}

/** A component containing children components */
export interface ContainerComponent extends ComponentWithFill {
	type: "container";
	/** This container's children */
	children: Component[];
	/** The corner radius for this component */
	cornerRadius: number;
}

export interface TextComponent extends BaseComponent {
	type: "text";
	/** The text for this component */
	content: string;
	/** The font family for this component */
	fontFamily: string;
	/** The font size for this component */
	fontSize: number;
	/** The font weight for this component */
	fontWeight: number;
	/** The color for this component */
	textColor: Color;
}

/** A rectangle */
export interface RectangleComponent extends ComponentWithFill {
	type: "rectangle";
	/** The corner radius for this component */
	cornerRadius: number;
}

/** A circle or oval */
export interface EllipseComponent extends ComponentWithFill {
	type: "ellipse";
}
