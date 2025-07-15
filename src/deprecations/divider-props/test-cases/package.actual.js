import DsDivider from '@org/ui/material/Divider';
import { DsDivider as MyDivider } from '@org/ui/material';

<DsDivider light className="test" />;
<MyDivider light className="test" />;
<DsDivider light={false} className="test" />;
<MyDivider light={false} className="test" />;
<DsDivider light={light} className="test" />;
<MyDivider light={light} className="test" />;
<DsDivider light sx={{ opacity: '0.7' }} />;
<MyDivider light sx={{ bgcolor: 'black' }} />;
<DsDivider className="test" />;
