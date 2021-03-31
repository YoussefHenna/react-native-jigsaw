// @ts-nocheck
export const PROP_TYPES = {
  STRING: "STRING",
  ARRAY: "ARRAY",
  NUMBER: "NUMBER",
  BOOLEAN: "BOOLEAN",
  OBJECT: "OBJECT",
  ASSET: "ASSET",
  THEME: "THEME",
};

export const GROUPS = {
  accessibility: "accessibility",
  basic: "basic",
  layout: "layout",
  advanced: "advanced",
  data: "data",
  uncategorized: "uncategorized",
};

export const FORM_TYPES = {
  json: "json",
  multiselect: "multiselect",
  position: "position",
  sourceUrl: "sourceUrl",
  url: "url",
  string: "string",
  boolean: "boolean",
  number: "number",
  select: "select",
  color: "color",
  typeStyle: "typeStyle",
  component: "component",
  geolocation: "geolocation",
  image: "image",
  imageArray: "imageArray",
  icon: "icon",
  style: "style",
  function: "function",
  flatArray: "flatArray" /* array of strings or numbers */,
  array: "array" /* array of objects */,
  aspectRatio: "aspectRatio",
  date: "date",
  borderRadiusMode: "borderRadiusMode",
  fieldName: "fieldName",
  action: "action",
};

export const COMPONENT_TYPES = {
  basic: "basic",
  media: "media",
  layout: "layout",
  input: "input",
  data: "data",
  card: "card",
  header: "header",
  button: "button",
  image: "image",
  field: "field",
  formControl: "formControl",
  row: "row",
  container: "container",
  blocks: "blocks",
  deprecated: "deprecated",
  screen: "screen",
  codeComponent: "codeComponent",
};

const ELEVATION_TYPE = {
  label: "Elevation",
  description: "Elevation of the component. A number 0-3.",
  formType: FORM_TYPES.flatArray,
  propType: PROP_TYPES.NUMBER,
  options: [0, 1, 2, 3],
  defaultValue: 0,
  editable: true,
  required: false,
  group: GROUPS.basic,
};

export const createElevationType = (defaultValue) => ({
  ...ELEVATION_TYPE,
  defaultValue,
});

export const TEXT_TYPE = {
  label: "Text",
  description: "Text you can customize however you'd like",
  formType: FORM_TYPES.string,
  propType: PROP_TYPES.STRING,
  defaultValue: "Beautiful West Coast Villa",
  editable: true,
  required: false,
  group: GROUPS.data,
};

export const createTextType = (overrides) => ({
  ...TEXT_TYPE,
  ...overrides,
});

export const IMAGE_TYPE = {
  label: "Image",
  description: "Image",
  formType: FORM_TYPES.image,
  propType: PROP_TYPES.ASSET,
  defaultValue: null,
  editable: true,
  required: true,
  group: GROUPS.data,
};

export const createImageType = (overrides = {}) => ({
  ...IMAGE_TYPE,
  ...overrides,
});

export const ICON_TYPE = {
  label: "Icon",
  description: "Displays an icon of your choice",
  formType: FORM_TYPES.icon,
  propType: PROP_TYPES.STRING /* OR ASSET TODO TEST ME */,
  defaultValue: null,
  editable: true,
  required: false,
  group: GROUPS.basic,
};

export const createIconType = (overrides = {}) => ({
  ...ICON_TYPE,
  ...overrides,
});

export const ASPECT_RATIO_TYPE = {
  label: "Aspect ratio",
  description: "Aspect ratio of the image",
  formType: FORM_TYPES.aspectRatio,
  propType: PROP_TYPES.NUMBER,
  defaultValue: 1.5,
  editable: true,
  required: false,
  group: GROUPS.basic,
};

export const createAspectRatioType = (overrides = {}) => ({
  ...ASPECT_RATIO_TYPE,
  ...overrides,
});

export const createActionType = (overrides = {}) => ({
  group: GROUPS.basic,
  label: "Action",
  description: "Action to execute when button pressed",
  editable: true,
  required: false,
  formType: FORM_TYPES.action,
  defaultValue: null,
  ...overrides,
});

export const createBoolType = (overrides = {}) => ({
  label: "Centered Text",
  description: "Whether to center the text",
  formType: FORM_TYPES.boolean,
  propType: PROP_TYPES.BOOLEAN,
  defaultValue: false,
  editable: true,
  required: false,
  group: GROUPS.basic,
  ...overrides,
});

export const createTextStyle = (overrides = {}) => ({
  group: GROUPS.basic,
  label: "Text Style",
  description: "Change the font styles of a given component",
  editable: true,
  required: true,
  formType: FORM_TYPES.typeStyle,
  propType: PROP_TYPES.THEME,
  defaultValue: null,
  ...overrides,
});

export const createNumColumnsType = (overrides) => ({
  label: "Number of Columns",
  description: "Number of Columns",
  group: GROUPS.uncategorized,
  formType: FORM_TYPES.number,
  propType: PROP_TYPES.NUMBER,
  defaultValue: 1,
  editable: false,
  required: false,
  ...overrides,
});

export const BORDER_RADIUS_MODE = {
  label: "Border radius",
  description:
    "Border radius of the element - either None, Global (using theme global border radius), or Round (must specify a width and height on component)",
  formType: FORM_TYPES.borderRadiusMode,
  propType: PROP_TYPES.THEME,
  defaultValue: null,
  editable: true,
  required: true,
};

export const FIELD_NAME = {
  group: GROUPS.basic,
  label: "Field name",
  description:
    "The name of the field within the screen that will store this component's value",
  formType: FORM_TYPES.fieldName,
  propType: PROP_TYPES.STRING,
  defaultValue: null,
  valuePropName: "value",
  handlerPropName: "onChange",
  editable: true,
  required: false,
};

export const TEXT_INPUT_PROPS = {
  allowFontScaling: {
    group: GROUPS.advanced,
    label: "Allow Font Scaling",
    description:
      "Whether fonts should scale to respect Text Size in the user's accessibility settings. (Default: true)",
    editable: true,
    required: false,
    defaultValue: true,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  autoCapitalize: {
    group: GROUPS.advanced,
    label: "Auto Capitalize",
    description:
      "Can automatically capitalize sentences, words, and characters (Default: none).",
    editable: true,
    required: false,
    defaultValue: "none",
    options: ["none", "sentences", "words", "characters"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
  },
  autoCorrect: {
    group: GROUPS.advanced,
    label: "Auto Correct",
    description: "Enables auto correction",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  autoFocus: {
    group: GROUPS.basic,
    label: "Auto Focus",
    description: "Focuses the input on load in and brings up the keyboard",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  caretHidden: {
    group: GROUPS.advanced,
    label: "Hide Caret",
    description:
      "Hides the caret(the line small line underneath each showing where you're editing/typing",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  contextMenuHidden: {
    group: GROUPS.advanced,
    label: "Hide Context Menu",
    description: "Hides the system context menu (Default: false)",
    editable: true,
    required: false,
    defaultValue: false,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  defaultValue: {
    group: GROUPS.basic,
    label: "Default Value",
    description:
      "The value that of the text-input initially, not a placeholder but the value that the textInput is taking in.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
  },
  editable: {
    group: GROUPS.advanced,
    label: "Editable",
    description: "If false, the text is not editable",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  keyboardAppearance: {
    group: GROUPS.advanced,
    label: "Keyboard Appearance",
    description: "Determines the color of the keyboard.(iOS Only)",
    editable: true,
    required: false,
    defaultValue: "default",
    options: ["default", "light", "dark"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
  },
  keyboardType: {
    group: GROUPS.advanced,
    label: "Keyboard Type",
    description: "Determines what keyboard is given to the user.",
    editable: true,
    required: false,
    defaultValue: "default",
    options: [
      "default",
      "email-address",
      "numeric",
      "phone-pad",
      "ascii-capable",
      "numbers-and-punctuation",
      "url",
      "number-pad",
      "name-phone-pad",
      "decimal-pad",
      "twitter",
      "web-search",
      "visible-password",
    ],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
  },
  maxLength: {
    group: GROUPS.basic,
    label: "Max Length",
    description: "Limits the input to a set number of characters.",
    editable: true,
    required: false,
    defaultValue: null,
    min: 0,
    step: 1,
    precision: 0,
    formType: FORM_TYPES.number,
    propType: PROP_TYPES.NUMBER,
  },
  placeholder: {
    group: GROUPS.basic,
    label: "Placeholder Text",
    description: "The text that is shown on load when no value is available.",
    editable: true,
    required: false,
    defaultValue: "Change my fieldname to email or password on the right side",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
  },
  placeholderTextColor: {
    group: GROUPS.basic,
    label: "Placeholder Text Color",
    description: "The color of the placeholder text.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.STRING,
  },
  returnKeyLabel: {
    group: GROUPS.advanced,
    label: "Return Key Label",
    description:
      "(Android Only) Sets the label on the return key (use this instead of rewturnKeyType)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
  },
  returnKeyType: {
    group: GROUPS.advanced,
    label: "Return Key Type",
    description: "Determines how the return key should look like",
    editable: true,
    required: false,
    defaultValue: null,
    options: [
      "done",
      "go",
      "next",
      "search",
      "send",
      "none",
      "previous",
      "default",
      "emergency-call",
      "google",
      "join",
      "route",
      "yahoo",
    ],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
  },
  secureTextEntry: {
    group: GROUPS.basic,
    label: "Password Input?",
    description:
      "Hides the characters with a *, useful for passwords and other sensitive information.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  selectionColor: {
    group: GROUPS.advanced,
    label: "Selection Color",
    description: "Color of the highlighted portion when selecting.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.STRING,
  },
  selectTextOnFocus: {
    group: GROUPS.advanced,
    label: "Select Text on Focus",
    description:
      "If true, all the text will automatically be selected on focus",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
};
