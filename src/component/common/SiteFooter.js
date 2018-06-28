import React, {Component} from 'react';
import '../../style/common/SiteFooter.css';

export default class SiteFooter extends Component {
    render() {
        return (
            <footer className='SiteFooter'>
                <p>
                    Designed and developed by Ke Jin. Source code availble on <a
                    href='//github.com/jackjinke/nmzl-website'>GitHub</a>.
                </p>
                <p>
                    This website is hosted on <a href='//aws.amazon.com'>AWS</a>.
                    Dota 2, Dota 2 icons and images and Steam are copyrighted by <a href='//www.valvesoftware.com/'>Valve
                    Software</a>.
                </p>
            </footer>
        );
    }
}