import { ChartStyle } from "../../Types";
import generateColors from "./GenerateColors";

const assignStyles = (d, style: ChartStyle) => {
    d.backgroundColor = style?.backgroundColor || generateColors(1)[0];
    d.borderColor = style?.borderColor || generateColors(1)[0];
    d.hoverRadius = style?.hoverRadius
    d.radius = style?.radius
    d.hidden = style?.hidden
    d.barThickness = style?.barThickness

    if (!style)
        return;

    assign(style, d, 'radius');
    assign(style, d, 'borderWidth');
    assign(style, d, 'hoverRadius');
    assign(style, d, 'hidden');
    assign(style, d, 'barThickness');
    
}

const assign = (src, tgt, key: keyof ChartStyle) => {
    if (src[key])
        tgt[key] = src[key];
}

export { assignStyles };