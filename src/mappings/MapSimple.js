import {
  COMPONENT_TYPES,
  FORM_TYPES,
  BORDER_RADIUS_MODE,
} from "../core/component-types";
export const SEED_DATA = {
  name: "Map",
  tag: "MapSimple",
  description: "A map, with optional markers",
  category: COMPONENT_TYPES.media,
  preview_image_url: "{CLOUDINARY_URL}/Map_Simple.png",
  supports_list_render: false,
  layout: {},
  props: {
    initialLatitude: {
      label: "Initial latitude",
      description:
        "The latitude of the location to center the map on initially",
      type: FORM_TYPES.number,
      min: -90,
      max: 90,
      step: 1,
      precision: 6,
      value: 37.402184,
      required: true,
      editable: true,
    },
    initialLongitude: {
      label: "Initial longitude",
      description:
        "The longitude of the location to center the map on initially",
      type: FORM_TYPES.number,
      min: -180,
      max: 180,
      step: 1,
      precision: 6,
      value: -122.121264,
      required: true,
      editable: true,
    },
    initialLatitudeDelta: {
      label: "Initial latitude delta",
      description:
        "The amount of latitude to display on the map initially (the horizontal zoom)",
      type: FORM_TYPES.number,
      min: 0.0001,
      max: 100,
      step: 1,
      precision: 4,
      value: 0.2,
      required: true,
      editable: true,
    },
    initialLongitudeDelta: {
      label: "Initial longitude delta",
      description:
        "The amount of longitude to display on the map initially (the vertical zoom)",
      type: FORM_TYPES.number,
      min: 0.0001,
      max: 100,
      step: 1,
      precision: 4,
      value: 0.2,
      required: true,
      editable: true,
    },
    aspectRatio: {
      label: "Aspect ratio",
      description: "Aspect ratio of the map",
      type: FORM_TYPES.aspectRatio,
      value: 1,
      editable: true,
      required: true,
    },
    interactionDisabled: {
      label: "Disable interaction",
      description: "Prevent users from dragging or zooming on the map",
      type: FORM_TYPES.boolean,
      value: false,
      editable: true,
      required: false,
    },
    pinColor: {
      label: "Pin color",
      description: "Color of the map pins",
      editable: true,
      required: true,
      value: "primary",
      type: FORM_TYPES.color,
    },
    markers: {
      label: "Markers",
      description: "Markers for the map.",
      type: FORM_TYPES.arrayInput,
      value: [],
      editable: true,
      required: false,
    },
    borderRadiusMode: BORDER_RADIUS_MODE,
  },
};