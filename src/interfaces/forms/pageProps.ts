export interface LoaderProps {
  bg?: string;
  h?: string | number;
}

export type NavProps = {
  setShowSidebar: (arg: boolean) => void;
  setTabWidth: (arg: string) => void;
};

export type SidebarProps = NavProps & {
  tabWidth: string;
  showSidebar: boolean;
};

export interface PaginationProps {
  dataPerPage: number;
  totalData: number;
  currentPage: number;
  setCurrentPage: (args: number) => void;
}

export interface HeaderProps {
  heading: string;
  subHeading?: string;
}

export type AddAndEditModalProps = {
  isEdit: boolean;
  onClose?: () => void;
};
