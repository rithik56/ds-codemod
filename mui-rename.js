const fs = require('fs');
const path = require('path');
const recast = require('recast');
const { visit } = require('ast-types');
const { builders: b } = require('ast-types');

const COMPONENT_MAP = {
  Accordion: 'DsAccordion',
  AccordionActions: 'DsAccordionActions',
  AccordionDetails: 'DsAccordionDetails',
  AccordionSummary: 'DsAccordionSummary',
  AppBar: 'DsAppBar',
  Autocomplete: 'DsAutocomplete',
  Avatar: 'DsAvatar',
  AvatarGroup: 'DsAvatarGroup',
  Backdrop: 'DsBackdrop',
  Badge: 'DsBadge',
  BottomNavigation: 'DsBottomNavigation',
  BottomNavigationAction: 'DsBottomNavigationAction',
  BottomSheet: 'DsBottomSheet',
  Box: 'DsBox',
  Breadcrumbs: 'DsBreadcrumbs',
  Button: 'DsButton',
  ButtonBase: 'DsButtonBase',
  ButtonGroup: 'DsButtonGroup',
  Card: 'DsCard',
  CardActionArea: 'DsCardActionArea',
  CardActions: 'DsCardActions',
  CardContent: 'DsCardContent',
  CardHeader: 'DsCardHeader',
  CardMedia: 'DsCardMedia',
  Carousel: 'DsCarousel',
  Checkbox: 'DsCheckbox',
  Chip: 'DsChip',
  ChipGroup: 'DsChipGroup',
  CircularProgress: 'DsCircularProgress',
  ClickAwayListener: 'DsClickAwayListener',
  Collapse: 'DsCollapse',
  Container: 'DsContainer',
  ContentSlider: 'DsContentSlider',
  CssBaseline: 'DsCssBaseline',
  DatePicker: 'DsDatePicker',
  Dialog: 'DsDialog',
  DialogActions: 'DsDialogActions',
  DialogContent: 'DsDialogContent',
  DialogContentText: 'DsDialogContentText',
  DialogTitle: 'DsDialogTitle',
  Divider: 'DsDivider',
  Drawer: 'DsDrawer',
  Fab: 'DsFab',
  Fade: 'DsFade',
  FileUploader: 'DsFileUploader',
  FilledInput: 'DsFilledInput',
  FormControl: 'DsFormControl',
  FormControlLabel: 'DsFormControlLabel',
  FormGroup: 'DsFormGroup',
  FormHelperText: 'DsFormHelperText',
  FormLabel: 'DsFormLabel',
  GlobalStyles: 'DsGlobalStyles',
  Grid: 'DsGrid',
  Grow: 'DsGrow',
  Header: 'DsHeader',
  HelperText: 'DsHelperText',
  Icon: 'DsIcon',
  IconButton: 'DsIconButton',
  Image: 'DsImage',
  ImageList: 'DsImageList',
  ImageListItem: 'DsImageListItem',
  ImageListItemBar: 'DsImageListItemBar',
  Input: 'DsInput',
  InputAdornment: 'DsInputAdornment',
  InputBase: 'DsInputBase',
  InputLabel: 'DsInputLabel',
  LinearProgress: 'DsLinearProgress',
  Link: 'DsLink',
  List: 'DsList',
  ListItem: 'DsListItem',
  ListItemAvatar: 'DsListItemAvatar',
  ListItemButton: 'DsListItemButton',
  ListItemIcon: 'DsListItemIcon',
  ListItemSecondaryAction: 'DsListItemSecondaryAction',
  ListItemText: 'DsListItemText',
  ListSubheader: 'DsListSubheader',
  Loader: 'DsLoader',
  Menu: 'DsMenu',
  MenuItem: 'DsMenuItem',
  MenuList: 'DsMenuList',
  MobileStepper: 'DsMobileStepper',
  Modal: 'DsModal',
  NativeSelect: 'DsNativeSelect',
  OutlinedInput: 'DsOutlinedInput',
  Pagination: 'DsPagination',
  PaginationItem: 'DsPaginationItem',
  Paper: 'DsPaper',
  Popover: 'DsPopover',
  Popper: 'DsPopper',
  Popup: 'DsPopup',
  Portal: 'DsPortal',
  ProgressIndicator: 'DsProgressIndicator',
  ProgressTracker: 'DsProgressTracker',
  Radio: 'DsRadio',
  RadioGroup: 'DsRadioGroup',
  Rating: 'DsRating',
  RemixIcon: 'DsRemixIcon',
  ScopedCssBaseline: 'DsScopedCssBaseline',
  Searchbar: 'DsSearchbar',
  Select: 'DsSelect',
  Skeleton: 'DsSkeleton',
  Slide: 'DsSlide',
  Slider: 'DsSlider',
  SpeedDial: 'DsSpeedDial',
  SpeedDialAction: 'DsSpeedDialAction',
  SpeedDialIcon: 'DsSpeedDialIcon',
  Stack: 'DsStack',
  Step: 'DsStep',
  StepButton: 'DsStepButton',
  StepConnector: 'DsStepConnector',
  StepContent: 'DsStepContent',
  StepIcon: 'DsStepIcon',
  StepLabel: 'DsStepLabel',
  Stepper: 'DsStepper',
  SvgIcon: 'DsSvgIcon',
  SwipeableDrawer: 'DsSwipeableDrawer',
  Switch: 'DsSwitch',
  Tab: 'DsTab',
  TabScrollButton: 'DsTabScrollButton',
  Table: 'DsTable',
  TableBody: 'DsTableBody',
  TableCell: 'DsTableCell',
  TableContainer: 'DsTableContainer',
  TableFooter: 'DsTableFooter',
  TableHead: 'DsTableHead',
  TablePagination: 'DsTablePagination',
  TableRow: 'DsTableRow',
  TableSortLabel: 'DsTableSortLabel',
  Tabs: 'DsTabs',
  Tag: 'DsTag',
  TagGroup: 'DsTagGroup',
  TextArea: 'DsTextArea',
  TextField: 'DsTextField',
  TextFieldPassword: 'DsTextFieldPassword',
  TextareaAutosize: 'DsTextareaAutosize',
  Toast: 'DsToast',
  Toggle: 'DsToggle',
  ToggleButton: 'DsToggleButton',
  ToggleButtonGroup: 'DsToggleButtonGroup',
  Toolbar: 'DsToolbar',
  Tooltip: 'DsTooltip',
  Typography: 'DsTypography',
  Zoom: 'DsZoom',
};

const shouldReplaceLiteral = (value) =>
  typeof value === 'string' && COMPONENT_MAP.hasOwnProperty(value);

const processFile = (filePath) => {
  const source = fs.readFileSync(filePath, 'utf8');
  let ast;

  try {
    ast = recast.parse(source, {
      parser: require('recast/parsers/babel'),
    });
  } catch (err) {
    console.warn(`❌ Skipping (parse error): ${filePath}`);
    return;
  }

  let modified = false;

  visit(ast, {
    visitLiteral(path) {
      const { node } = path;
      if (shouldReplaceLiteral(node.value)) {
        const newValue = COMPONENT_MAP[node.value];
        path.replace(b.literal(newValue));
        modified = true;
      }
      this.traverse(path);
    },
  });

  if (modified) {
    const output = recast.print(ast).code;
    fs.writeFileSync(filePath, output, 'utf8');
  }
};

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });


  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory() && entry.name === 'test-cases') {
          continue;
        }
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name.endsWith('.js') || entry.name.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
};

const targetDir = path.resolve('./src'); // ⬅️ Adjust if needed
walk(targetDir);
