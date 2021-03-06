import React, { Component, Fragment, ComponentType} from "react";
import Select, {components} from "react-select";

export const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];
type Props = {};
type State = {
  isClearable: boolean;
  isDisabled: boolean;
  isLoading: boolean;
  isRtl: boolean;
  isSearchable: boolean;
};
const DropdownIndicator = (
    props:  any
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        ttrrr
      </components.DropdownIndicator>
    );
  };
const Combobox: React.FC<Props> = ({}: Props) => {
  return (
    <Fragment>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        name="color"
        options={colourOptions}
        components={{DropdownIndicator}}
      />
    </Fragment>
  );
};
export default Combobox;
