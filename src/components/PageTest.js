import React, { Component } from 'react'
import Pager from './Pager';
// import Student from './Student';
import StudentList from './StudentList';
// import Modal from './Modal';
/**
 * 分页插件
 * 属性：
 * 1、初始页码 current
 * 2、总数据量 total
 * 3、每页的条数 limit
 * 4、数字页码最多现实多少 panelNumber
 * 5、当页码改变的事件 onPageChange
 */
export default class PageTest extends Component {
    state = {
        current : 1,
        total : 0,
        limit : 3,
        panelNumber : 5,
        student : [],
        //isLoading : false
    }

    constructor(props){
        super(props);
        this.fetchStudents();
    }
    async fetchStudents(){
        this.setState({
            isLoading : true
        })
        const resp = await fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=hjc990805_1570523974382&page=${this.state.current}&size=${this.state.limit}`)
        .then(resp=>resp.json())
        .then(resp=>resp.data)
        this.setState({
            total : resp.cont,
            student : resp.findByPage,
            isLoading : false
        })
    }

    handlePageChange = (newPage) => {
        // console.log(newPage);
        this.setState({
            current : newPage
        })
        this.fetchStudents()
    }
    render() {
        return (
            <div className='container'>
                <StudentList stus={this.state.student}/>
                <div className='pager'>
                    <Pager {...this.state} onPageChange={this.handlePageChange}/>
                </div>
            </div>
        )
    }
}
