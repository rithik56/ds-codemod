import DsSlider from '@mui/material/Slider';

<DsSlider
  components={{ Track: ComponentsTrack }}
  componentsProps={{ track: componentsTrackProps }}
/>;
<DsSlider
  slots={{ rail: SlotsRail }}
  components={{ Track: ComponentsTrack }}
  slotProps={{ rail: slotsRailProps }}
  componentsProps={{ track: componentsTrackProps }}
/>;
<DsSlider
  slots={{ rail: SlotsRail, track: SlotsTrack }}
  components={{ Track: ComponentsTrack }}
  slotProps={{ rail: slotsRailProps, track: slotsTrackProps }}
  componentsProps={{ track: componentsTrackProps }}
/>;
<DsSlider
  slots={{ rail: SlotsRail, track: SlotsTrack }}
  components={{ Track: ComponentsTrack }}
  slotProps={{ rail: slotsRailProps, track: slotsTrackProps }}
  componentsProps={{ track: componentsTrackProps, rail: componentsRailProps}}
/>;
