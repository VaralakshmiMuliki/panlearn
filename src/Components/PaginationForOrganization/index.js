import {React} from 'react'
import "./pagination.scss"
import { Pagination } from 'antd'
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';

export const PaginationForOrganization = (props) => {
    // let {setpage, pagesize} = props;
        return (
         <div className="pagination">
         <Pagination
          total={20}
          defaultPageSize={props.pagesize}
          defaultCurrent={1}
          onChange = {(page) => props.setpage(page)}
         
         />
         </div> 
         )
}
PaginationForOrganization.propTypes = {
    setpage:PropTypes.number,
    pagesize: PropTypes.number
}

