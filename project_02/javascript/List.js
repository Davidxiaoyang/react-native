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
    //��ʼ������ȡthis.stateĬ��ֵ
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged : (r1,r2) => r1 !== r2
        });
        //stateֻ�洢ԭʼ����,��Ҫ�洢����������
        this.state = {
            dataSource:ds.cloneWithRows(['row1','row2'])
        }

    }
    //��render֮ǰ���ô˷�������render֮ǰҪ��������������ﴦ��
    componentWillMount(){

    }
    //��Ⱦ������һ������dom
    render(){

    }
    //��render֮��,react��ʹ��render���ص�����dom��������ʵ��dom�����֮����ô˷���
    componentDidMount(){

    }
}