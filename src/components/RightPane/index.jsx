import { Button, Popover, Radio, Row, Select, Tooltip, Typography } from "antd";
import {
    AlignCenterOutlined,
    AlignLeftOutlined,
    AlignRightOutlined,
    BgColorsOutlined,
    FontColorsOutlined,
    BoldOutlined,
    ItalicOutlined,
    PropertySafetyFilled
} from "@ant-design/icons";
import "antd/dist/antd.css";
import React, { useState, useMemo } from "react";
import { SketchPicker } from 'react-color';
import "./index.css";
import anime from "animejs";
const { Option } = Select;

const fontsList = [
    "Arial", "Antonio", "Abril Fatface", "Acme", "Bangers", "Bitter", "Bebas Neue", "Courier", "Open Sans", "Roboto", "Roboto Slab", "Times New Roman",
    "Martel Sans", "Quicksand", "Pacifico", "Syne Mono", "Ranchers", "Source Sans Pro", "Redressed", "Montserrat", "Mukta", "Oswald"
    , "Satisfy", "Permanent Marker", "Caveat", "Fira Sans", "Limelight", "Langer", "Shadows Into Light", "Dancing Script", "Josefin Sans",
    "Akaya Telivigala", "Fredoka One", "Exo 2", "Ubuntu Mono", "Fjalla One", "Zen Dots", "Great Vibes", "Gloria Hallelujah", "Kaushan Script",
    "Orbitron", "Concert One", "Yellowtail", "Ultra", "Unlock", "Merienda", "Monoton", "Homemade Apple", "Berkshire Swash", "Black Ops One", "Hanalei Fill"
    , "Audiowide", "Aclonica"
];


export default function TextBoxBar(props) {

    const [textBoxValues, setTextBoxValues] = useState({
        color: "#ffffff",
        backgroundColor: "transparent",
        fontSize: 16,
        fontFamily: "Times New Roman",
        lineHeight: "1.0",
        textAnimation: "No Animation",
        bold: "normal",
        italic: "normal",
        textAlign: "left",
    })

    const handleColorChange = (type, clr) => {
        let val = clr.hex;
        if (type === "backgroundColor") {
            if (val !== "transparent") {
                const alpha = Math.floor(clr.rgb.a * 255).toString(16);
                if (alpha.length === 1)
                    val += `0${alpha}`;
                else
                    val += alpha;
            } else {
                val = "#00000000";
            }
            setTextBoxValues({ ...textBoxValues, backgroundColor: val });
        }
        else if (type === "color") {

            if (val !== "transparent") {
                const alpha = Math.floor(clr.rgb.a * 255).toString(16);
                if (alpha.length === 1)
                    val += `0${alpha}`;
                else
                    val += alpha;
            } else {
                val = "#00000000";
            }
            setTextBoxValues({ ...textBoxValues, color: val });
        }
        handleChange(type, val);
    }

    const high = useMemo(() => {
        let textBox = document.getElementById('hihi');
        if (textBox) {
            textBox.style.backgroundColor = textBoxValues.backgroundColor;
            textBox.style.color = textBoxValues.color;
            textBox.style.fontSize = textBoxValues.fontSize + "px";
            textBox.style.fontFamily = textBoxValues.fontFamily;
            textBox.style.lineHeight = textBoxValues.lineHeight;
            textBox.style.fontWeight = textBoxValues.bold;
            textBox.style.fontStyle = textBoxValues.italic;
            textBox.style.textAlign = textBoxValues.textAlign;
            textBox.style.lineHeight = textBoxValues.lineHeight;
        }
        console.log(textBoxValues);
    }, [textBoxValues])

    const handleChange = (type, e) => {
        setTextBoxValues({ ...textBoxValues, [type]: e });
    }

    return (
        <div className="right__n">
            <Typography.Title level={5} type="secondary">Text Properties</Typography.Title>
            <Row>
                <Tooltip title="Font Family">
                    <Select style={{ width: "60%", marginBottom:"15px" }} value={textBoxValues.fontFamily} onChange={(e) => handleChange("fontFamily", e)}>
                        {
                            fontsList.sort().map(font => (
                                <Option key={font} value={font}>
                                    <div style={{ fontFamily: font }}>{font}</div>
                                </Option>
                            ))
                        }
                    </Select>
                </Tooltip>
                <Tooltip title="Font Size">
                    Font Size
                    <br />
                    <Select style={{ margin:"5px" }} value={textBoxValues.fontSize} onChange={(e) => handleChange("fontSize", e)}>
                        {
                            Array.from({ length: 10 }, (_, i) => (
                                <Option key={`size-${i}`} value={(i + 1) * 6}
                                >
                                    {(i + 1) * 6}
                                </Option>
                            ))
                        }
                        {/* {
                            textBoxValues.fontSize % 6 !== 0 && (
                                <Option key={`size-${textBoxValues.fontSize}`} value={textBoxValues.fontSize}
                                >
                                    {textBoxValues.fontSize}
                                </option>
                            )
                        } */}
                    </Select>
                    <input
                    style={{ margin:"5px" }}
                        type="range"
                        className="slider"
                        min="16"
                        max="100"
                        value={textBoxValues.fontSize}
                        onChange={(e) => handleChange("fontSize", e.target.value)}
                    />
                </Tooltip>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Tooltip title="Font Style">
                    <Radio.Group
                        optionType="button"
                        buttonStyle="solid"
                        size="large"
                    >
                        <Radio.Button value={textBoxValues.bold} style={{ backgroundColor: "white", borderColor: "1px solid gray", color: "black" }}
                            onClick={(e) => handleChange("bold", textBoxValues.bold === "bold" ? "normal" : "bold")}>
                            <BoldOutlined />
                        </Radio.Button>
                    </Radio.Group>
                    <Radio.Group
                        optionType="button"
                        buttonStyle="solid"
                        size="large"
                        style={{ marginLeft: '1rem' }}
                    >
                        <Radio.Button value="italic" style={{ backgroundColor: "white", borderColor: "1px solid gray", color: "black" }}
                            onClick={(e) => handleChange("italic", textBoxValues.italic === "italic" ? "normal" : "italic")}>
                            <ItalicOutlined />
                        </Radio.Button>
                    </Radio.Group>

                </Tooltip>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Tooltip title="Line Height">
                    <Select style={{ width: "100%" }} value={textBoxValues.lineHeight} onChange={(e) => handleChange("lineHeight", e)}>
                        {
                            Array.from(
                                { length: 10 }, (_, i) => (
                                    <Option key={`lh-${i}`}
                                        value={(i * 0.1 + 1.0).toFixed(1)}
                                    >
                                        {(i * 0.1 + 1.0).toFixed(1)}
                                    </Option>
                                ))
                        }
                    </Select>
                </Tooltip>
            </Row>
            <Row style={{ marginTop: "20px" }} justify="space-around" align="middle">
                <Popover
                    trigger="click"
                    style={{ zIndex: "999", position: "relative" }}
                    content={
                        <SketchPicker color={textBoxValues.color}
                            onChange={clr => handleColorChange("color", clr)}
                        />
                    }
                >
                    <Tooltip title="Font Color">
                        <Button icon={<FontColorsOutlined />} style={{ backgroundColor: textBoxValues.color, color: "black" }}
                            size="large" />
                    </Tooltip>
                </Popover>
                <Popover
                    trigger="click"
                    style={{ zIndex: "999", position: "relative" }}
                    content={
                        <SketchPicker color={textBoxValues.backgroundColor}
                            onChange={clr => handleColorChange("backgroundColor", clr)}
                        />
                    }
                >
                    <Tooltip title="Background Color">
                        <Button type="primary" icon={<BgColorsOutlined />} style={{ backgroundColor: textBoxValues.backgroundColor, color: "black" }}
                            size="large" />
                    </Tooltip>
                </Popover>
                <Tooltip title="Text Alignment">
                    <Radio.Group
                        optionType="button"
                        buttonStyle="solid"
                        size="large"
                        defaultValue={textBoxValues.textAlign}
                    >
                        <Radio.Button value="left" onClick={(e) => handleChange("textAlign", "left")}><AlignLeftOutlined /></Radio.Button>
                        <Radio.Button value="center" onClick={(e) => handleChange("textAlign", "center")}><AlignCenterOutlined /></Radio.Button>
                        <Radio.Button value="right" onClick={(e) => handleChange("textAlign", "right")}><AlignRightOutlined /></Radio.Button>
                    </Radio.Group>
                </Tooltip>
            </Row>
            <Row style={{ marginTop: "40px" }}>
                <div className="rightSidebar__Label">Text Animation</div>
                <Select style={{ width: "100%" }} defaultValue="No Animation" onChange={(e) => {setTextBoxValues({ ...textBoxValues, textAnimation: e });props.setAnimClass(e.split("||")[1]);props.setAnimName(e.split("||")[0])}}>
                    {/* <Option value="No Animation">No Animation</Option>
                    <Option value="Slide Left">Slide Left</Option>
                    <Option value="Slide Right">Slide Right</Option>
                    <Option value="Slide Top">Slide Top</Option>
                    <Option value="Slide Bottom">Slide Bottom</Option> */}
                    <Option value="NoAnimation||none">No Animation</Option>
                    <Option value="test1||ml2">test1</Option>
                    <Option value="test2||ml7">test2</Option>
                    <Option value="test3||ml12">test3</Option>
                    <Option value="test4||ml15">test4</Option>
                    <Option value="test5||ml16">test5</Option>
                    <Option value="test6||ml11">test6</Option>
                    <Option value="test7||ml3">test7</Option>
                    <Option value="test8||ml6">test8</Option>
                    <Option value="test9||ml9">test9</Option>
                    <Option value="test10||ml10">test10</Option>
                    <Option value="test11||ml13">test11</Option>
                </Select>
            </Row>
        </div>
    );
}
