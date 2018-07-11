var arr=[
{img:'img/123.PNG',img1:'img/flower1.png',img2:'img/flower2.png',
img3:'img/flower3.png',text:'GS3546546',dengji:'20',
shuju1:'1000',shuju2:'100',shuju3:'180',shuju4:'900',
conent:'高档仿真花制作，由于新产品上市，国内外市场受欢迎供不应求。面向全国诚招联合生产经营加盟合作商户，产品包回收，提供订单，保障长年有活。产品批交批结。把分厂办到全国各地。'},
{img:'img/123.PNG',img1:'img/flower1.png',img2:'img/flower2.png',
img3:'img/flower3.png',text:'GS3546546',dengji:'20',
shuju1:'1000',shuju2:'100',shuju3:'180',shuju4:'900',
conent:'高档仿真花制作，由于新产品上市，国内外市场受欢迎供不应求。面向全国诚招联合生产经营加盟合作商户，产品包回收，提供订单，保障长年有活。产品批交批结。把分厂办到全国各地。'},
{img:'img/123.PNG',img1:'img/flower1.png',img2:'img/flower2.png',
img3:'img/flower3.png',text:'GS3546546',dengji:'20',
shuju1:'1000',shuju2:'100',shuju3:'180',shuju4:'900',
conent:'高档仿真花制作，由于新产品上市，国内外市场受欢迎供不应求。面向全国诚招联合生产经营加盟合作商户，产品包回收，提供订单，保障长年有活。产品批交批结。把分厂办到全国各地。'},
{img:'img/123.PNG',img1:'img/flower1.png',img2:'img/flower2.png',
img3:'img/flower3.png',text:'GS3546546',dengji:'20',
shuju1:'1000',shuju2:'100',shuju3:'180',shuju4:'900',
conent:'高档仿真花制作，由于新产品上市，国内外市场受欢迎供不应求。面向全国诚招联合生产经营加盟合作商户，产品包回收，提供订单，保障长年有活。产品批交批结。把分厂办到全国各地。'},
{img:'img/123.PNG',img1:'img/flower1.png',img2:'img/flower2.png',
img3:'img/flower3.png',text:'GS3546546',dengji:'20',
shuju1:'1000',shuju2:'100',shuju3:'180',shuju4:'900',
conent:'高档仿真花制作，由于新产品上市，国内外市场受欢迎供不应求。面向全国诚招联合生产经营加盟合作商户，产品包回收，提供订单，保障长年有活。产品批交批结。把分厂办到全国各地。'}
];
var arr2=[{img1:'img/flower1.png',text1:'GS3546546',text2:'10',text3:'男'},
{img1:'img/flower1.png',text1:'GS3546546',text2:'10',text3:'男'},
{img1:'img/flower2.png',text1:'GS3546546',text2:'110',text3:'女'},
{img1:'img/flower3.png',text1:'GS3546546',text2:'130',text3:'男'},
{img1:'img/flower1.png',text1:'GS3546546',text2:'140',text3:'女'},
{img1:'img/flower1.png',text1:'GS3546546',text2:'180',text3:'男'},
{img1:'img/flower1.png',text1:'GS3546546',text2:'150',text3:'男'}]
var html='';
var html2='';
//循环数组
for(var i=0;i<arr.length;i++){
	html+=`<hr class="M-HR" /><div class="M-C-Box">
					<div class="M-C-Left">
						<img src=`+arr[i].img+` class="M-C-UserImg" />
					</div>
					<div class="M-C-Right">
						<div style="font-size: 10px;overflow: hidden;">
							<div class="M-C-Detail-L">
								<p style="margin-top: 16px;margin-bottom: 2px;">
									<span>编号</span>
									<span>`+arr[i].text+`</span>
									<span>级别</span>
									<span>`+arr[i].dengji+`级</span>
								</p>
								<div class="M-C-Type">销售</div>
							</div>
							<div class="M-C-Detail-R">
								<button class="M-C-BoxBtn">
		    				      <b class="icon iconfont icon-duihuakuang" style="font-size: 10px;"></b>
		    				      <b>联系他</b>
		    			        </button>
							</div>
						</div>
						<div>
							<p class="mui-ellipsis-3">`+arr[i].conent+`</p>
							<span class="publish_readdetail">查看全文</span>
							<br />
							<img src=`+arr[i].img1+` style="width: 75px;height: 75px;" />
							<img src=`+arr[i].img2+` style="width: 75px;height: 75px;" />
							<img src=`+arr[i].img3+` style="width: 75px;height: 75px;" />
							<br />
						</div>
						<div class="M-C-Footer">
							<p style="font-size: 10px;margin-bottom: 0;margin-top: 8px;">刚刚</p>
							<p style="display: flex;flex-direction: row;justify-content: space-around;align-items: center;">
							<i class="icon iconfont icon-liulan"><span class="shoucang-color-black">`+arr[i].shuju1+`</span></i>
							<i class="icon iconfont icon-dianzan"><span class="shoucang-color-black">`+arr[i].shuju2+`</span></i>
							<i class="icon iconfont icon-pinglun"><span class="shoucang-color-black">`+arr[i].shuju3+`</span></i>
							<i class="icon iconfont icon-shoucang information-i"><span class="shoucang-color-black">`+arr[i].shuju4+`</span></i>
							</p>
						</div>
					</div>
				</div>`
}
for(var i=0;i<arr2.length;i++){
	html2+=`<div class="M-C-Menber">
						<img src=`+arr2[i].img1+` class="M-C-I" />
						<p class="M-C-P">
							<span>编号：</span>
							<span>`+arr2[i].text1+`</span>
						</p>
						<p class="M-C-P">
							<span>级别：</span>
							<span>`+arr2[i].text2+`</span>
						</p>
						<p class="M-C-P">
							<span>性别：</span>
							<span>`+arr2[i].text3+`</span>
						</p>
						<p class="M-C-P">
							<span class="M-C-P-Color">查看详情</span>
							<button class="M-C-BoxBtn">
		    				   <b class="icon iconfont icon-duihuakuang" style="font-size: 10px;"></b>
		    				   <b>联系他</b>
		    			   </button>
						</p>
					</div>`
}
$('#page1').append(html)
$('.M-C').append(html2)

