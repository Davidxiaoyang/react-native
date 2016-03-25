/**
 * Created by Administrator on 2016/3/10 0010.
 */
'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    Image,
    View,
    ListView
} from 'react-native';

export default class List extends Component{
    //初始化，获取this.state默认值
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged : (r1,r2) => r1 !== r2
        });
        //state只存储原始数据,不要存储计算后的数据
        this.state = {
            dataSource:ds.cloneWithRows(['row1','row2'])
        }

    }
    //在render之前调用此方法，在render之前要做的事情就在这里处理
    componentWillMount(){

    }
    //渲染并返回一个虚拟dom
    render(){

    }
    //在render之后,react会使用render返回的虚拟dom来创建真实的dom，完成之后调用此方法
    componentDidMount(){

    }
}