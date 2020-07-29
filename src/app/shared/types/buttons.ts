export interface WidgetButtons {
  buttons?: Array<DozaButton>;
  title?: string;
  mainColor?: string;
  isEditMode?: boolean;
  style?: {
    button?: WidgetButtonsStyle;
    margin?: {
      top?: number;
      bottom?: number;
    };
    displayType?: ButtonsDisplayType;
    showBackground?: boolean;
  };
}

export class WidgetButtonsStyle {
  height = 'default';
  backgroundColor = '';
  borderColor = '';
  borderWidth = 0;
  borderRadius = 10;
  fontSize = 'default';
  textColor = '';
}

export interface DozaButton {
  link?: string;
  text?: string;
  icon?: string;
  openInNewTab?: boolean;
}

export enum ButtonsDisplayType {
  STYLE1 = 'style1',
  STYLE2 = 'style2',
}
