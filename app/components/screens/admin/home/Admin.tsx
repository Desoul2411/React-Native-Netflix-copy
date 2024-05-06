import React, { FC } from 'react';

import { AdminNavigation, Layout } from '@/components/ui';

const Admin: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Statistics' />
		</Layout>
	);
};

export default Admin;
