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

  // Charts components
  AnimatedArea: 'DsAnimatedArea',
  AnimatedLine: 'DsAnimatedLine',
  AreaElement: 'DsAreaElement',
  AreaPlot: 'DsAreaPlot',
  BarChart: 'DsBarChart',
  BarElement: 'DsBarElement',
  BarLabel: 'DsBarLabel',
  BarPlot: 'DsBarPlot',
  ChartContainer: 'DsChartContainer',
  ChartsAxis: 'DsChartsAxis',
  ChartsAxisHighlight: 'DsChartsAxisHighlight',
  ChartsClipPath: 'DsChartsClipPath',
  ChartsGrid: 'DsChartsGrid',
  ChartsLegend: 'DsChartsLegend',
  ChartsReferenceLine: 'DsChartsReferenceLine',
  ChartsSurface: 'DsChartsSurface',
  ChartsText: 'DsChartsText',
  ChartsTooltip: 'DsChartsTooltip',
  ChartsXAxis: 'DsChartsXAxis',
  ChartsYAxis: 'DsChartsYAxis',
  ContinuousColorLegend: 'DsContinuousColorLegend',
  ChartsAxisTooltipContent: 'DsChartsAxisTooltipContent',
  ChartsItemTooltipContent: 'DsChartsItemTooltipContent',
  Gauge: 'DsGauge',
  GaugeContainer: 'DsGaugeContainer',
  LineChart: 'DsLineChart',
  LineElement: 'DsLineElement',
  LineHighlightElement: 'DsLineHighlightElement',
  LineHighlightPlot: 'DsLineHighlightPlot',
  LinePlot: 'DsLinePlot',
  MarkElement: 'DsMarkElement',
  MarkPlot: 'DsMarkPlot',
  PieArc: 'DsPieArc',
  PieArcLabel: 'DsPieArcLabel',
  PieArcLabelPlot: 'DsPieArcLabelPlot',
  PieArcPlot: 'DsPieArcPlot',
  PiecewiseColorLegend: 'DsPiecewiseColorLegend',
  PieChart: 'DsPieChart',
  PiePlot: 'DsPiePlot',
  Scatter: 'DsScatter',
  ScatterChart: 'DsScatterChart',
  ScatterPlot: 'DsScatterPlot',
  SparkLineChart: 'DsSparkLineChart',
  ResponsiveChartContainer: 'DsResponsiveChartContainer',
  ChartsOnAxisClickHandler: 'DsChartsOnAxisClickHandler'
};

const excludePatterns = [
  /test/i,
  /\.json$/i,                       // Any .json file
  /(actual|expected|spec)\.(js|jsx|ts|tsx)$/,  // Matches actual.js, expected.tsx, etc.
];

const getParser = (filePath) => {
  const ext = path.extname(filePath);
  return ext === '.ts' || ext === '.tsx'
    ? require('recast/parsers/typescript')
    : require('recast/parsers/babel');
};

const sortedComponentEntries = Object.entries(COMPONENT_MAP).sort(
  ([a], [b]) => b.length - a.length
);

const processFile = (filePath) => {
  let source = fs.readFileSync(filePath, 'utf8');

  source = source.replace(/(['"`])@mui\/x-charts\1/g, '$1@am92/react-design-system$1');
  source = source.replace(/(['"`])@mui\/x-date-pickers\1/g, '$1@am92/react-design-system$1');
  source = source.replace(/(^|\W)@mui(?!\/)/g, (_, p1) => `${p1}@am92`);

  fs.writeFileSync(filePath, source, 'utf8');

  let ast;

  try {
    ast = recast.parse(source, {
      parser: getParser(filePath),
    });
  } catch (err) {
    console.warn(`❌ Skipping (parse error): ${filePath}`);
    return;
  }

  let modified = false;

  visit(ast, {
    visitLiteral(path) {
      const { node } = path;
      if (typeof node.value === 'string') {
        for (const [from, to] of sortedComponentEntries) {
          if (node.value === from) {
            path.replace(b.literal(to));
            modified = true;
            break;
          }
        }
      }
      this.traverse(path);
    },

    visitJSXIdentifier(path) {
      const { name } = path.node;
      if (COMPONENT_MAP.hasOwnProperty(name)) {
        path.node.name = COMPONENT_MAP[name];
        modified = true;
      }
      this.traverse(path);
    },

    visitTemplateLiteral(path) {
      const { quasis } = path.node;

      quasis.forEach((quasi) => {
        for (const [from, to] of sortedComponentEntries) {
          if (quasi.value.raw.includes(from)) {
            quasi.value.raw = quasi.value.raw.replaceAll(from, to);
            quasi.value.cooked = quasi.value.raw;
            modified = true;
            break;
          }
        }
      });

      this.traverse(path);
    },
  });

  if (modified) {
    const output = recast.print(ast).code;
    fs.writeFileSync(filePath, output, 'utf8');
  }
};

const shouldExclude = (filename) => {
  return excludePatterns.some((pattern) => pattern.test(filename));
};

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && (entry.name.toLowerCase().includes('test') || entry.name === 'util')) {
      continue;
    }
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (!shouldExclude(entry.name)) {
      processFile(fullPath);
    }
  }
};

const targetDir = path.resolve('./src'); // ⬅️ Adjust if needed
walk(targetDir);
