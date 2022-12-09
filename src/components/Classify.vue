<template>
  <div class="root">
    <div class="root1" @mouseleave="leave">
      <div class="classify">
        <div class="div1" @mouseenter="showdiv1" ref="dom1">
          <div class="div2">
            <a href='http://localhost:8080/#/search2/0/0/男人/0' class="a1">
              <span class="iconfont icon-SUIT span3" ref="dom11"></span>
              <span class="man" ref="dom12">男&nbsp;人</span>
            </a>
          </div>

          <span class="span1"><a href="http://localhost:8080/#/search0/0/89/男外套/0" ref="dom13">男外套</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/92/毛衣冬/0" ref="dom14">毛衣冬</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/98/男裤/0" ref="dom15">男裤</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/99/卫裤/0" ref="dom16">卫裤</a></span>
          <br />
          <span class="span2"><a href="http://localhost:8080/#/search0/0/109/板鞋/0" ref="dom17">板鞋</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/108/睡裤/0" ref="dom18">睡裤</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/106/西装裤/0" ref="dom19">西装裤</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/100/袜子男/0" ref="dom190">袜子男</a></span>
          <hr />
        </div>
        <div class="div3" @mouseenter="showdiv3" ref="dom2">
          <div class="div2">
            <a href='http://localhost:8080/#/search1/0/0/女人/0' class="a1">
              <span class="iconfont icon-qunzi span3" ref="dom290"></span>
              <span class="man" ref="dom29">女&nbsp;人</span>
            </a>
          </div>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/33/敬酒裙/0" ref="dom21">敬酒裙</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/36/短裙/0" ref="dom22">短裙</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/43/长袖上衣/0" ref="dom23">长袖上衣</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/54/打底/0" ref="dom24">打底</a></span>
          <br />
          <span class="span2"><a href="http://localhost:8080/#/search0/0/32/旗袍/0" ref="dom25">旗袍</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/72/帆布鞋/0" ref="dom26">帆布鞋</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/63/裤袜/0" ref="dom27">裤袜</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/77/性感睡衣/0" ref="dom28">性感睡衣</a></span>
          <hr />
        </div>
        <div class="div4" @mouseenter="showdiv4" ref="dom3">
          <div class="div2">
            <a href="http://localhost:8080/#/search5/0/0/家居/0" class="a1">
              <span class="iconfont icon-shafa span3" ref="dom31"></span>
              <span class="man" ref="dom32">家&nbsp;居</span>
            </a>
          </div>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/183/厨房挂钩/0" ref="dom33">厨房挂钩</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/182/小推车/0" ref="dom34">小推车</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/193/家居/0" ref="dom35">家居</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/199/汤锅/0" ref="dom36">汤锅</a></span>
          <br />
          <span class="span2"><a href="http://localhost:8080/#/search0/0/207/毛毯/0" ref="dom37">毛毯</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/205/面板/0" ref="dom38">面板</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/212/汽车头枕/0" ref="dom39">汽车头枕</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/211/羽绒被/0" ref="dom390">羽绒被</a></span>
          <hr />
        </div>
        <div class="div5" @mouseenter="showdiv5" ref="dom4">
          <div class="div2">
            <a href="#" class="a1">
              <span class="iconfont icon-meishi span3" ref="dom41"></span>
              <span class="man" ref="dom42">美&nbsp;食</span>
            </a>
          </div>
          <span class="span1"><a href="#" ref="dom43">四川特产</a></span>
          <span class="span1"><a href="#" ref="dom44">小鱼干</a></span>
          <span class="span1"><a href="#" ref="dom45">鸡翅</a></span>
          <span class="span1"><a href="#" ref="dom46">肉干</a></span>
          <br />
          <span class="span2"><a href="#" ref="dom47">薄荷糖</a></span>
          <span class="span2"><a href="#" ref="dom48">膨化食品</a></span>
          <span class="span2"><a href="#" ref="dom49">瓜子</a></span>
          <span class="span2"><a href="#" ref="dom490">苹果</a></span>
          <hr />
        </div>
        <div class="div6" @mouseenter="showdiv6" ref="dom5">
          <div class="div2">
            <a href="http://localhost:8080/#/search3/0/0/数码家电/0" class="a1">
              <span class="iconfont icon-shouye span3" ref="dom51"></span>
              <span class="man" ref="dom52">数&nbsp;码</span>
            </a>
          </div>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/151/运动相机/0" ref="dom53">运动相机</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/153/镜头/0" ref="dom54">镜头</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/141/小米/0" ref="dom55">小米</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/137/老年机/0" ref="dom56">老年机</a></span>
          <br />
          <span class="span2"><a href="http://localhost:8080/#/search0/0/138/苹果电脑/0" ref="dom57">苹果电脑</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/131/vivo/0" ref="dom58">vivo</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/144/联想/0" ref="dom59">联想</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/134/realme/0" ref="dom590">realme</a></span>
          <hr />
        </div>
        <div class="div7" @mouseenter="showdiv7" ref="dom6">
          <div class="div2">
            <a href="http://localhost:8080/#/search4/0/0/母婴/0" class="a1">
              <span class="iconfont icon-gouwuche span3" ref="dom61"></span>
              <span class="man" ref="dom62">母&nbsp;婴</span>
            </a>
          </div>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/157/厨房挂钩/0" ref="dom63">童装</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/154/女童毛衣/0" ref="dom64">女童毛衣</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/172/合生元/0" ref="dom65">合生元</a></span>
          <span class="span1"><a href="http://localhost:8080/#/search0/0/171/飞鹤/0" ref="dom66">飞鹤</a></span>
          <br />
          <span class="span2"><a href="http://localhost:8080/#/search0/0/165/整蛊玩具/0" ref="dom67">整蛊玩具</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/162/车模/0" ref="dom68">车模</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/167/羊奶粉/0" ref="dom69">羊奶粉</a></span>
          <span class="span2"><a href="http://localhost:8080/#/search0/0/170/钙片/0" ref="dom690">钙片</a></span>
        </div>
      </div>

      <!--轮播图区域-->
      <div v-if="show1">
        <SliderShow></SliderShow>
      </div>
      <div class="class1" v-if="show2">
        <div class="d1">
          <span class="span4"><a href="http://localhost:8080/#/search0/12/0/上衣/0">上衣</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/86/针织衫/0">针织衫</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/87/V型毛衣/0">V型毛衣</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/88/汉服0">汉服</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/89/男外套/0">男外套</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/90/夹克/0">夹克</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/92/毛衣冬/0">毛衣冬</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/93/飞行夹克/0">飞行夹克</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/95/羊毛衫/0">羊毛衫</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/94/羊绒衫/0">羊绒衫</a></span>
        </div>
        <div class="d2">
          <span class="span4"><a href="http://localhost:8080/#/search0/13/0/裤子/0">裤子</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/96/运动裤/0">运动裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/97/工装裤/0">工装裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/98/男裤/0">男裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/99/卫裤/0">卫裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/100/袜子男0">袜子男</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/101/直筒裤/0">直筒裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/102/休闲长裤/0">休闲长裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/106/西装裤/0">西装裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/107/格子裤/0">格子裤</a></span>
        </div>
        <div class="d3">
          <span class="span4"><a href="http://localhost:8080/#/search0/14/0/鞋子/0">鞋子</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/109/板鞋/0">板鞋</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/110/帆布鞋/0">帆布鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/112/冬季男鞋/0">冬季男鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/113/休闲男鞋0">休闲男鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/114/阿迪/0">阿迪</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/115/耐克/0">耐克</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/116/勒肯鞋/0">新百伦</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/117/回力鞋/0">Vans</a></span>
        </div>
      </div>
      <div class="class2" v-if="show3">
        <div class="d1">
          <span class="span4"><a href="http://localhost:8080/#/search0/7/0/裙子/0" >裙子</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/32/旗袍/0">旗袍</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/33/敬酒服/0">敬酒服</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/34/长裙/0">长裙</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/35/婚纱/0">婚纱</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/36/短裙/0">短裙</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/37/包臀裙/0">包臀裙</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/38/鱼尾裙/0">鱼尾裙</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/40/背带裙0">背带裙</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/39/秋冬裙/0">秋冬裙</a></span>
        </div>
        <div class="d2">
          <span class="span4"><a href="http://localhost:8080/#/search0/8/0/上衣/0">上衣</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/41/白色T恤/0">白色T恤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/42/秋冬衬衫/0">秋冬衬衫</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/43/长袖上衣/0">长袖上衣</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/44/妈妈装/0">妈妈装</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/45/妈妈外套/0">妈妈外套</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/46/粉色上衣/0">粉色上衣</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/47/挂脖套装/0">挂脖套装</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/48/秋季套装/0">秋季套装</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/49/针织套装/0">针织套装</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/50/内搭/0">内搭</a></span>
        </div>
        <div class="d3">
          <span class="span4"><a href="http://localhost:8080/#/search0/9/0/裤子/0">裤子</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/51/运动裤/0">运动裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/52/阔腿裤/0">阔腿裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/53/卫裤/0">卫裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/54/打底/0">打底</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/55/休闲裤/0">休闲裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/56/短裤/0">短裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/57/瑜伽裤/0">瑜伽裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/58/西装裤/0">西装裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/59/假两件/0">假两件</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/61/西装套装/0">西装套装</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/60/加绒卫裤/0">加绒卫裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/62/皮短裤0">皮短裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/63/裤袜/0">裤袜</a></span>
        </div>
        <div class="d4">
          <span class="span4"><a href="http://localhost:8080/#/search0/10/0/女鞋/0">女鞋</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/66/单鞋/0">单鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/67/婚鞋0">婚鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/68/小白鞋0">小白鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/69/豆豆鞋/0">豆豆鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/70/平底鞋/0">平底鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/71/乐福鞋/0">乐福鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/72/帆布鞋/0">帆布鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/73/厚底鞋/0">厚底鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/74/玛丽珍鞋/0">玛丽珍鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/75/鞋秋/0">鞋秋</a></span>
        </div>
        <div class="d5">
          <span class="span4"><a href="http://localhost:8080/#/search0/11/0/内衣/0">内衣</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/76/黑丝/0">黑丝</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/77/性感睡衣/0">性感睡衣</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/78/礼服/0">礼服</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/79/运动内衣/0">运动内衣</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/80/长筒袜/0">长筒袜</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/81/袜子/0">袜子</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/82/长袜/0">长袜</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/83/内裤0">内裤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/84/情趣内衣/0">情趣内衣</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/85/过膝袜/0">过膝袜</a></span>
        </div>
      </div>
      <div class="class3" v-if="show4">
        <div class="d1">
          <span class="span4"><a href="http://localhost:8080/#/search0/24/0/收纳/0">收纳</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/179/晾衣架/0">晾衣架</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/180/工具箱/0">工具箱</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/181/洗衣篓/0">洗衣篓</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/182/小推车/0">小推车</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/183/厨房挂钩/0">厨房挂钩</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/184/环保袋/0">环保袋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/185/压缩袋/0">压缩袋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/186/周转箱/0">周转箱</a></span>
        </div>
        <div class="d2">
          <span class="span4"><a href="http://localhost:8080/#/search0/25/0/居家/0">居家</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/187/毛毛鞋/0">毛毛鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/188/气球/0">气球</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/189/生日布置/0">生日布置</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/190/冬拖鞋/0">冬拖鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/191/居家拖鞋/0">居家拖鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/192/圣诞树/0">圣诞树</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/193/家居/0">家居</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/194/冬季棉鞋/0">冬季棉鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/195/鞋底/0">鞋底</a></span>
        </div>
        <div class="d3">
          <span class="span4"><a href="http://localhost:8080/#/search0/26/0/厨房/0">厨房</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/196/菜板/0">菜板</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/197/炒锅/0">炒锅</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/198/铁锅/0">铁锅</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/199/汤锅/0">汤锅</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/200/砧板/0">砧板</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/201/牛奶杯/0">牛奶杯</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/202/电磁炉锅/0">电磁炉锅</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/203/切菜板/0">切菜板</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/204/案板/0">案板</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/205/面板/0">面板</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/206/铝锅/0">铝锅</a></span>
        </div>
        <div class="d4">
          <span class="span4"><a href="http://localhost:8080/#/search0/27/0/家纺/0">家纺</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/207/毛毯/0">毛毯</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/208/棉被/0">棉被</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/209/毯子/0">毯子</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/210/三件套/0">三件套</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/211/羽绒被/0">羽绒被</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/212/汽车头枕/0">汽车头枕</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/213/乳胶枕/0">乳胶枕</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/214/沙发毯/0">沙发毯</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/215/毛巾纯棉/0">毛巾纯棉</a></span>
        </div>
      </div>
      <div class="class4" v-if="show5">
        <div class="d1">
          <span class="span4"><a href="#">特产</a></span>
          <span class="span5"><a href="#">牛肉</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">肉松</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">四川特产</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">鸡腿</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">猪油</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">牛板筋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">小鱼干</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">肉干</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">泡椒风爪</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">鸡翅</a></span>
        </div>
        <div class="d2">
          <span class="span4"><a href="#">名茶</a></span>
          <span class="span5"><a href="#">黑咖啡</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">雀巢咖啡</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">茉莉花茶</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">乌龙茶</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">菊花茶</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">观音王</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">玫瑰花</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">冬季棉鞋</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">桂花</a></span>
        </div>
        <div class="d3">
          <span class="span4"><a href="#">蔬果</a></span>
          <span class="span5"><a href="#">哈密瓜</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">苹果</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">柚子</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">榴莲</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">李子</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">芒果</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">柚子</a></span>
        </div>
        <div class="d4">
          <span class="span4"><a href="#">零食</a></span>
          <span class="span5"><a href="#">毛毯</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">棉被</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">毯子</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">三件套</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">羽绒被</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">汽车头枕</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">乳胶枕</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">沙发毯</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="#">毛巾纯棉</a></span>
        </div>
      </div>
      <div class="class5" v-if="show6">
        <div class="d1">
          <span class="span4"><a href="http://localhost:8080/#/search0/15/0/家电/0">家电</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/122/格力空调/0">格力空调</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/120/酒柜/0">酒柜</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/119/燃气灶/0">燃气灶</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/121/消毒柜/0">消毒柜</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/118/美的空调/0">美的空调</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/123/中央空调/0">中央空调</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/124/立式空调/0">立式空调</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/125/海尔空调/0">海尔空调</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/126/消毒碗柜/0">消毒碗柜</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/127/小洗衣机/0">小洗衣机</a></span>
        </div>
        <div class="d2">
          <span class="span4"><a href="http://localhost:8080/#/search0/16/0/手机/0">手机</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/128/小米手机/0">小米手机</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/129/华为手机/0">华为手机</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/130/苹果手机/0">苹果手机</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/131/vivo手机/0">vivo手机</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/132/oppp/0">oppo</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/133/三星/0">三星</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/134/realme/0">realme</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/135/一加/0">一加</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/136/魅族/0">魅族</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/137/老年机/0">老年机</a></span>
        </div>
        <div class="d3">
          <span class="span4"><a href="http://localhost:8080/#/search0/17/0/电脑/0">电脑</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/138/苹果电脑/0">苹果电脑</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/139/华硕电脑/0">华硕电脑</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/140/ROG/0">ROG</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/141/小米/0">小米</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/142/惠普/0">惠普</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/143/戴尔/0">戴尔</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/144/联想/0">联想</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/145/神舟/0">神舟</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/146/华为电脑/0">华为电脑</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/147/微星/0">微星</a></span>
        </div>
        <div class="d4">
          <span class="span4"><a href="http://localhost:8080/#/search0/18/0/相机/0">相机</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/148/单反相机/0">单反相机</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/149/微单相机/0">微单相机</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/150/数码相机/0">数码相机</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/151/运动相机/0">运动相机</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/152/摄影配件/0">摄影配件</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/153/镜头/0">镜头</a></span>
        </div>
      </div>
      <div class="class6" v-if="show7">
        <div class="d1">
          <span class="span4"><a href="http://localhost:8080/#/search0/19/0/童装/0">童装</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/154/女童毛衣/0">女童毛衣</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/155/儿童毛衣/0">儿童毛衣</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/156/女童马甲/0">女童马甲</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/158/宝宝衣服/0">宝宝衣服</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/157/男童马甲/0">儿童马甲</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/159/女童外套/0">女童外套</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/161/性感睡衣/0">男童外套</a></span>
        </div>
        <div class="d2">
          <span class="span4"><a href="http://localhost:8080/#/search0/20/0/玩具/0">玩具</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/163/减压玩具/0">减压玩具</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/162/车模/0">车模</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/164/手指滑板/0">手指滑板</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/165/整蛊玩具/0">整蛊玩具</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/166/卡牌/0">卡牌</a></span>
        </div>
        <div class="d3">
          <span class="span4"><a href="http://localhost:8080/#/search0/21/0/奶粉/0">奶粉</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/167/钙片/0">钙片</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/168/爱他美/0">爱他美</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/169/君乐宝/0">君乐宝</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/170/羊奶粉/0">羊奶粉</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/171/飞鹤/0">飞鹤</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/172/合生元/0">合生元</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/173/贝因美/0">贝因美</a></span>
        </div>
        <div class="d4">
          <span class="span4"><a href="http://localhost:8080/#/search0/23/0/婴儿/0">婴儿</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/174/宝宝面霜/0">宝宝面霜</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/175/婴儿餐椅/0">婴儿餐椅</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/176/青蛙王子/0">青蛙王子</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/177/卷笔刀/0">卷笔刀</a></span>
          <span class="span5">|</span>
          <span class="span5"><a href="http://localhost:8080/#/search0/0/178/文具袋/0">文具袋</a></span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import SliderShow from "@/components/SliderShow.vue";
export default {
  data(){
    return{
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
    }
  },
  methods: {
     showdiv1() {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
      this.$nextTick(() => {
        this.$refs.dom11.style.color = "white";
        this.$refs.dom12.style.color = "white";
        this.$refs.dom13.style.color = "white";
        this.$refs.dom14.style.color = "white";
        this.$refs.dom15.style.color = "white";
        this.$refs.dom16.style.color = "white";
        this.$refs.dom17.style.color = "white";
        this.$refs.dom18.style.color = "white";
        this.$refs.dom19.style.color = "white";
        this.$refs.dom190.style.color = "white";
        this.$refs.dom1.style.background = "#d93637";
        //
        this.$refs.dom21.style.color = "#999";
        this.$refs.dom22.style.color = "#999";
        this.$refs.dom23.style.color = "#999";
        this.$refs.dom24.style.color = "#999";
        this.$refs.dom25.style.color = "#999";
        this.$refs.dom26.style.color = "#999";
        this.$refs.dom27.style.color = "#999";
        this.$refs.dom28.style.color = "#999";
        this.$refs.dom29.style.color = "red";
        this.$refs.dom290.style.color = "red";
        this.$refs.dom2.style.background = "#f4f4f4";
        //
        this.$refs.dom31.style.color = "red";
        this.$refs.dom32.style.color = "red";
        this.$refs.dom33.style.color = "#999";
        this.$refs.dom34.style.color = "#999";
        this.$refs.dom35.style.color = "#999";
        this.$refs.dom36.style.color = "#999";
        this.$refs.dom37.style.color = "#999";
        this.$refs.dom38.style.color = "#999";
        this.$refs.dom39.style.color = "#999";
        this.$refs.dom390.style.color = "#999";
        this.$refs.dom3.style.background = "#f4f4f4";
        //
        this.$refs.dom41.style.color = "red";
        this.$refs.dom42.style.color = "red";
        this.$refs.dom43.style.color = "#999";
        this.$refs.dom44.style.color = "#999";
        this.$refs.dom45.style.color = "#999";
        this.$refs.dom46.style.color = "#999";
        this.$refs.dom47.style.color = "#999";
        this.$refs.dom48.style.color = "#999";
        this.$refs.dom49.style.color = "#999";
        this.$refs.dom490.style.color = "#999";
        this.$refs.dom4.style.background = "#f4f4f4";
        //
        this.$refs.dom51.style.color = "red";
        this.$refs.dom52.style.color = "red";
        this.$refs.dom53.style.color = "#999";
        this.$refs.dom54.style.color = "#999";
        this.$refs.dom55.style.color = "#999";
        this.$refs.dom56.style.color = "#999";
        this.$refs.dom57.style.color = "#999";
        this.$refs.dom58.style.color = "#999";
        this.$refs.dom59.style.color = "#999";
        this.$refs.dom590.style.color = "#999";
        this.$refs.dom5.style.background = "#f4f4f4";
        //
        this.$refs.dom61.style.color = "red";
        this.$refs.dom62.style.color = "red";
        this.$refs.dom63.style.color = "#999";
        this.$refs.dom64.style.color = "#999";
        this.$refs.dom65.style.color = "#999";
        this.$refs.dom66.style.color = "#999";
        this.$refs.dom67.style.color = "#999";
        this.$refs.dom68.style.color = "#999";
        this.$refs.dom69.style.color = "#999";
        this.$refs.dom690.style.color = "#999";
        this.$refs.dom6.style.background = "#f4f4f4";
      });
    },
    showdiv3() {
      this.$refs.dom11.style.color = "red";
      this.$refs.dom12.style.color = "red";
      this.$refs.dom13.style.color = "#999";
      this.$refs.dom14.style.color = "#999";
      this.$refs.dom15.style.color = "#999";
      this.$refs.dom16.style.color = "#999";
      this.$refs.dom17.style.color = "#999";
      this.$refs.dom18.style.color = "#999";
      this.$refs.dom19.style.color = "#999";
      this.$refs.dom190.style.color = "#999";
      this.$refs.dom1.style.background = "#f4f4f4";
      //
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
      this.$refs.dom21.style.color = "white";
      this.$refs.dom22.style.color = "white";
      this.$refs.dom23.style.color = "white";
      this.$refs.dom24.style.color = "white";
      this.$refs.dom25.style.color = "white";
      this.$refs.dom26.style.color = "white";
      this.$refs.dom27.style.color = "white";
      this.$refs.dom28.style.color = "white";
      this.$refs.dom29.style.color = "white";
      this.$refs.dom290.style.color = "white";
      this.$refs.dom2.style.background = "#d93637";
      //
      this.$refs.dom31.style.color = "red";
      this.$refs.dom32.style.color = "red";
      this.$refs.dom33.style.color = "#999";
      this.$refs.dom34.style.color = "#999";
      this.$refs.dom35.style.color = "#999";
      this.$refs.dom36.style.color = "#999";
      this.$refs.dom37.style.color = "#999";
      this.$refs.dom38.style.color = "#999";
      this.$refs.dom39.style.color = "#999";
      this.$refs.dom390.style.color = "#999";
      this.$refs.dom3.style.background = "#f4f4f4";
      //
      this.$refs.dom41.style.color = "red";
      this.$refs.dom42.style.color = "red";
      this.$refs.dom43.style.color = "#999";
      this.$refs.dom44.style.color = "#999";
      this.$refs.dom45.style.color = "#999";
      this.$refs.dom46.style.color = "#999";
      this.$refs.dom47.style.color = "#999";
      this.$refs.dom48.style.color = "#999";
      this.$refs.dom49.style.color = "#999";
      this.$refs.dom490.style.color = "#999";
      this.$refs.dom4.style.background = "#f4f4f4";
      //
      this.$refs.dom51.style.color = "red";
      this.$refs.dom52.style.color = "red";
      this.$refs.dom53.style.color = "#999";
      this.$refs.dom54.style.color = "#999";
      this.$refs.dom55.style.color = "#999";
      this.$refs.dom56.style.color = "#999";
      this.$refs.dom57.style.color = "#999";
      this.$refs.dom58.style.color = "#999";
      this.$refs.dom59.style.color = "#999";
      this.$refs.dom590.style.color = "#999";
      this.$refs.dom5.style.background = "#f4f4f4";
      //
      this.$refs.dom61.style.color = "red";
      this.$refs.dom62.style.color = "red";
      this.$refs.dom63.style.color = "#999";
      this.$refs.dom64.style.color = "#999";
      this.$refs.dom65.style.color = "#999";
      this.$refs.dom66.style.color = "#999";
      this.$refs.dom67.style.color = "#999";
      this.$refs.dom68.style.color = "#999";
      this.$refs.dom69.style.color = "#999";
      this.$refs.dom690.style.color = "#999";
      this.$refs.dom6.style.background = "#f4f4f4";
    },
    showdiv4() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
      this.$refs.dom11.style.color = "red";
      this.$refs.dom12.style.color = "red";
      this.$refs.dom13.style.color = "#999";
      this.$refs.dom14.style.color = "#999";
      this.$refs.dom15.style.color = "#999";
      this.$refs.dom16.style.color = "#999";
      this.$refs.dom17.style.color = "#999";
      this.$refs.dom18.style.color = "#999";
      this.$refs.dom19.style.color = "#999";
      this.$refs.dom190.style.color = "#999";
      this.$refs.dom1.style.background = "#f4f4f4";
      //
      this.$refs.dom21.style.color = "#999";
      this.$refs.dom22.style.color = "#999";
      this.$refs.dom23.style.color = "#999";
      this.$refs.dom24.style.color = "#999";
      this.$refs.dom25.style.color = "#999";
      this.$refs.dom26.style.color = "#999";
      this.$refs.dom27.style.color = "#999";
      this.$refs.dom28.style.color = "#999";
      this.$refs.dom29.style.color = "red";
      this.$refs.dom290.style.color = "red";
      this.$refs.dom2.style.background = "#f4f4f4";
      //
      this.$refs.dom31.style.color = "white";
      this.$refs.dom32.style.color = "white";
      this.$refs.dom33.style.color = "white";
      this.$refs.dom34.style.color = "white";
      this.$refs.dom35.style.color = "white";
      this.$refs.dom36.style.color = "white";
      this.$refs.dom37.style.color = "white";
      this.$refs.dom38.style.color = "white";
      this.$refs.dom39.style.color = "white";
      this.$refs.dom390.style.color = "white";
      this.$refs.dom3.style.background = "#d93637";
      //
      this.$refs.dom41.style.color = "red";
      this.$refs.dom42.style.color = "red";
      this.$refs.dom43.style.color = "#999";
      this.$refs.dom44.style.color = "#999";
      this.$refs.dom45.style.color = "#999";
      this.$refs.dom46.style.color = "#999";
      this.$refs.dom47.style.color = "#999";
      this.$refs.dom48.style.color = "#999";
      this.$refs.dom49.style.color = "#999";
      this.$refs.dom490.style.color = "#999";
      this.$refs.dom4.style.background = "#f4f4f4";
      //
      this.$refs.dom51.style.color = "red";
      this.$refs.dom52.style.color = "red";
      this.$refs.dom53.style.color = "#999";
      this.$refs.dom54.style.color = "#999";
      this.$refs.dom55.style.color = "#999";
      this.$refs.dom56.style.color = "#999";
      this.$refs.dom57.style.color = "#999";
      this.$refs.dom58.style.color = "#999";
      this.$refs.dom59.style.color = "#999";
      this.$refs.dom590.style.color = "#999";
      this.$refs.dom5.style.background = "#f4f4f4";
      //
      this.$refs.dom61.style.color = "red";
      this.$refs.dom62.style.color = "red";
      this.$refs.dom63.style.color = "#999";
      this.$refs.dom64.style.color = "#999";
      this.$refs.dom65.style.color = "#999";
      this.$refs.dom66.style.color = "#999";
      this.$refs.dom67.style.color = "#999";
      this.$refs.dom68.style.color = "#999";
      this.$refs.dom69.style.color = "#999";
      this.$refs.dom690.style.color = "#999";
      this.$refs.dom6.style.background = "#f4f4f4";
    },
    showdiv5() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = true;
      this.show6 = false;
      this.show7 = false;
      this.$refs.dom11.style.color = "red";
      this.$refs.dom12.style.color = "red";
      this.$refs.dom13.style.color = "#999";
      this.$refs.dom14.style.color = "#999";
      this.$refs.dom15.style.color = "#999";
      this.$refs.dom16.style.color = "#999";
      this.$refs.dom17.style.color = "#999";
      this.$refs.dom18.style.color = "#999";
      this.$refs.dom19.style.color = "#999";
      this.$refs.dom190.style.color = "#999";
      this.$refs.dom1.style.background = "#f4f4f4";
      //
      this.$refs.dom21.style.color = "#999";
      this.$refs.dom22.style.color = "#999";
      this.$refs.dom23.style.color = "#999";
      this.$refs.dom24.style.color = "#999";
      this.$refs.dom25.style.color = "#999";
      this.$refs.dom26.style.color = "#999";
      this.$refs.dom27.style.color = "#999";
      this.$refs.dom28.style.color = "#999";
      this.$refs.dom29.style.color = "red";
      this.$refs.dom290.style.color = "red";
      this.$refs.dom2.style.background = "#f4f4f4";
      //
      this.$refs.dom31.style.color = "red";
      this.$refs.dom32.style.color = "red";
      this.$refs.dom33.style.color = "#999";
      this.$refs.dom34.style.color = "#999";
      this.$refs.dom35.style.color = "#999";
      this.$refs.dom36.style.color = "#999";
      this.$refs.dom37.style.color = "#999";
      this.$refs.dom38.style.color = "#999";
      this.$refs.dom39.style.color = "#999";
      this.$refs.dom390.style.color = "#999";
      this.$refs.dom3.style.background = "#f4f4f4";
      //

      this.$refs.dom41.style.color = "white";
      this.$refs.dom42.style.color = "white";
      this.$refs.dom43.style.color = "white";
      this.$refs.dom44.style.color = "white";
      this.$refs.dom45.style.color = "white";
      this.$refs.dom46.style.color = "white";
      this.$refs.dom47.style.color = "white";
      this.$refs.dom48.style.color = "white";
      this.$refs.dom49.style.color = "white";
      this.$refs.dom490.style.color = "white";
      this.$refs.dom4.style.background = "#d93637";
      //
      this.$refs.dom51.style.color = "red";
      this.$refs.dom52.style.color = "red";
      this.$refs.dom53.style.color = "#999";
      this.$refs.dom54.style.color = "#999";
      this.$refs.dom55.style.color = "#999";
      this.$refs.dom56.style.color = "#999";
      this.$refs.dom57.style.color = "#999";
      this.$refs.dom58.style.color = "#999";
      this.$refs.dom59.style.color = "#999";
      this.$refs.dom590.style.color = "#999";
      this.$refs.dom5.style.background = "#f4f4f4";
      //
      this.$refs.dom61.style.color = "red";
      this.$refs.dom62.style.color = "red";
      this.$refs.dom63.style.color = "#999";
      this.$refs.dom64.style.color = "#999";
      this.$refs.dom65.style.color = "#999";
      this.$refs.dom66.style.color = "#999";
      this.$refs.dom67.style.color = "#999";
      this.$refs.dom68.style.color = "#999";
      this.$refs.dom69.style.color = "#999";
      this.$refs.dom690.style.color = "#999";
      this.$refs.dom6.style.background = "#f4f4f4";
    },
    showdiv6() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = true;
      this.show7 = false;
      this.$refs.dom11.style.color = "red";
      this.$refs.dom12.style.color = "red";
      this.$refs.dom13.style.color = "#999";
      this.$refs.dom14.style.color = "#999";
      this.$refs.dom15.style.color = "#999";
      this.$refs.dom16.style.color = "#999";
      this.$refs.dom17.style.color = "#999";
      this.$refs.dom18.style.color = "#999";
      this.$refs.dom19.style.color = "#999";
      this.$refs.dom190.style.color = "#999";
      this.$refs.dom1.style.background = "#f4f4f4";
      //
      this.$refs.dom21.style.color = "#999";
      this.$refs.dom22.style.color = "#999";
      this.$refs.dom23.style.color = "#999";
      this.$refs.dom24.style.color = "#999";
      this.$refs.dom25.style.color = "#999";
      this.$refs.dom26.style.color = "#999";
      this.$refs.dom27.style.color = "#999";
      this.$refs.dom28.style.color = "#999";
      this.$refs.dom29.style.color = "red";
      this.$refs.dom290.style.color = "red";
      this.$refs.dom2.style.background = "#f4f4f4";
      //
      this.$refs.dom31.style.color = "red";
      this.$refs.dom32.style.color = "red";
      this.$refs.dom33.style.color = "#999";
      this.$refs.dom34.style.color = "#999";
      this.$refs.dom35.style.color = "#999";
      this.$refs.dom36.style.color = "#999";
      this.$refs.dom37.style.color = "#999";
      this.$refs.dom38.style.color = "#999";
      this.$refs.dom39.style.color = "#999";
      this.$refs.dom390.style.color = "#999";
      this.$refs.dom3.style.background = "#f4f4f4";
      //
      this.$refs.dom41.style.color = "red";
      this.$refs.dom42.style.color = "red";
      this.$refs.dom43.style.color = "#999";
      this.$refs.dom44.style.color = "#999";
      this.$refs.dom45.style.color = "#999";
      this.$refs.dom46.style.color = "#999";
      this.$refs.dom47.style.color = "#999";
      this.$refs.dom48.style.color = "#999";
      this.$refs.dom49.style.color = "#999";
      this.$refs.dom490.style.color = "#999";
      this.$refs.dom4.style.background = "#f4f4f4";
      //

      this.$refs.dom51.style.color = "white";
      this.$refs.dom52.style.color = "white";
      this.$refs.dom53.style.color = "white";
      this.$refs.dom54.style.color = "white";
      this.$refs.dom55.style.color = "white";
      this.$refs.dom56.style.color = "white";
      this.$refs.dom57.style.color = "white";
      this.$refs.dom58.style.color = "white";
      this.$refs.dom59.style.color = "white";
      this.$refs.dom590.style.color = "white";
      this.$refs.dom5.style.background = "#d93637";
      //
      this.$refs.dom61.style.color = "red";
      this.$refs.dom62.style.color = "red";
      this.$refs.dom63.style.color = "#999";
      this.$refs.dom64.style.color = "#999";
      this.$refs.dom65.style.color = "#999";
      this.$refs.dom66.style.color = "#999";
      this.$refs.dom67.style.color = "#999";
      this.$refs.dom68.style.color = "#999";
      this.$refs.dom69.style.color = "#999";
      this.$refs.dom690.style.color = "#999";
      this.$refs.dom6.style.background = "#f4f4f4";
    },
    showdiv7() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = true;
      this.$refs.dom11.style.color = "red";
      this.$refs.dom12.style.color = "red";
      this.$refs.dom13.style.color = "#999";
      this.$refs.dom14.style.color = "#999";
      this.$refs.dom15.style.color = "#999";
      this.$refs.dom16.style.color = "#999";
      this.$refs.dom17.style.color = "#999";
      this.$refs.dom18.style.color = "#999";
      this.$refs.dom19.style.color = "#999";
      this.$refs.dom190.style.color = "#999";
      this.$refs.dom1.style.background = "#f4f4f4";
      //
      this.$refs.dom21.style.color = "#999";
      this.$refs.dom22.style.color = "#999";
      this.$refs.dom23.style.color = "#999";
      this.$refs.dom24.style.color = "#999";
      this.$refs.dom25.style.color = "#999";
      this.$refs.dom26.style.color = "#999";
      this.$refs.dom27.style.color = "#999";
      this.$refs.dom28.style.color = "#999";
      this.$refs.dom29.style.color = "red";
      this.$refs.dom290.style.color = "red";
      this.$refs.dom2.style.background = "#f4f4f4";
      //
      this.$refs.dom31.style.color = "red";
      this.$refs.dom32.style.color = "red";
      this.$refs.dom33.style.color = "#999";
      this.$refs.dom34.style.color = "#999";
      this.$refs.dom35.style.color = "#999";
      this.$refs.dom36.style.color = "#999";
      this.$refs.dom37.style.color = "#999";
      this.$refs.dom38.style.color = "#999";
      this.$refs.dom39.style.color = "#999";
      this.$refs.dom390.style.color = "#999";
      this.$refs.dom3.style.background = "#f4f4f4";
      //
      this.$refs.dom41.style.color = "red";
      this.$refs.dom42.style.color = "red";
      this.$refs.dom43.style.color = "#999";
      this.$refs.dom44.style.color = "#999";
      this.$refs.dom45.style.color = "#999";
      this.$refs.dom46.style.color = "#999";
      this.$refs.dom47.style.color = "#999";
      this.$refs.dom48.style.color = "#999";
      this.$refs.dom49.style.color = "#999";
      this.$refs.dom490.style.color = "#999";
      this.$refs.dom4.style.background = "#f4f4f4";
      //
      this.$refs.dom51.style.color = "red";
      this.$refs.dom52.style.color = "red";
      this.$refs.dom53.style.color = "#999";
      this.$refs.dom54.style.color = "#999";
      this.$refs.dom55.style.color = "#999";
      this.$refs.dom56.style.color = "#999";
      this.$refs.dom57.style.color = "#999";
      this.$refs.dom58.style.color = "#999";
      this.$refs.dom59.style.color = "#999";
      this.$refs.dom590.style.color = "#999";
      this.$refs.dom5.style.background = "#f4f4f4";
      //
      this.$refs.dom61.style.color = "white";
      this.$refs.dom62.style.color = "white";
      this.$refs.dom63.style.color = "white";
      this.$refs.dom64.style.color = "white";
      this.$refs.dom65.style.color = "white";
      this.$refs.dom66.style.color = "white";
      this.$refs.dom67.style.color = "white";
      this.$refs.dom68.style.color = "white";
      this.$refs.dom69.style.color = "white";
      this.$refs.dom690.style.color = "white";
      this.$refs.dom6.style.background = "#d93637";
    },
    leave() {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
      this.$refs.dom11.style.color = "red";
      this.$refs.dom12.style.color = "red";
      this.$refs.dom13.style.color = "#999";
      this.$refs.dom14.style.color = "#999";
      this.$refs.dom15.style.color = "#999";
      this.$refs.dom16.style.color = "#999";
      this.$refs.dom17.style.color = "#999";
      this.$refs.dom18.style.color = "#999";
      this.$refs.dom19.style.color = "#999";
      this.$refs.dom190.style.color = "#999";
      this.$refs.dom1.style.background = "#f4f4f4";
      //
      this.$refs.dom21.style.color = "#999";
      this.$refs.dom22.style.color = "#999";
      this.$refs.dom23.style.color = "#999";
      this.$refs.dom24.style.color = "#999";
      this.$refs.dom25.style.color = "#999";
      this.$refs.dom26.style.color = "#999";
      this.$refs.dom27.style.color = "#999";
      this.$refs.dom28.style.color = "#999";
      this.$refs.dom29.style.color = "red";
      this.$refs.dom290.style.color = "red";
      this.$refs.dom2.style.background = "#f4f4f4";
      //
      this.$refs.dom31.style.color = "red";
      this.$refs.dom32.style.color = "red";
      this.$refs.dom33.style.color = "#999";
      this.$refs.dom34.style.color = "#999";
      this.$refs.dom35.style.color = "#999";
      this.$refs.dom36.style.color = "#999";
      this.$refs.dom37.style.color = "#999";
      this.$refs.dom38.style.color = "#999";
      this.$refs.dom39.style.color = "#999";
      this.$refs.dom390.style.color = "#999";
      this.$refs.dom3.style.background = "#f4f4f4";
      //
      this.$refs.dom41.style.color = "red";
      this.$refs.dom42.style.color = "red";
      this.$refs.dom43.style.color = "#999";
      this.$refs.dom44.style.color = "#999";
      this.$refs.dom45.style.color = "#999";
      this.$refs.dom46.style.color = "#999";
      this.$refs.dom47.style.color = "#999";
      this.$refs.dom48.style.color = "#999";
      this.$refs.dom49.style.color = "#999";
      this.$refs.dom490.style.color = "#999";
      this.$refs.dom4.style.background = "#f4f4f4";
      //
      this.$refs.dom51.style.color = "red";
      this.$refs.dom52.style.color = "red";
      this.$refs.dom53.style.color = "#999";
      this.$refs.dom54.style.color = "#999";
      this.$refs.dom55.style.color = "#999";
      this.$refs.dom56.style.color = "#999";
      this.$refs.dom57.style.color = "#999";
      this.$refs.dom58.style.color = "#999";
      this.$refs.dom59.style.color = "#999";
      this.$refs.dom590.style.color = "#999";
      this.$refs.dom5.style.background = "#f4f4f4";
      //
      this.$refs.dom61.style.color = "red";
      this.$refs.dom62.style.color = "red";
      this.$refs.dom63.style.color = "#999";
      this.$refs.dom64.style.color = "#999";
      this.$refs.dom65.style.color = "#999";
      this.$refs.dom66.style.color = "#999";
      this.$refs.dom67.style.color = "#999";
      this.$refs.dom68.style.color = "#999";
      this.$refs.dom69.style.color = "#999";
      this.$refs.dom690.style.color = "#999";
      this.$refs.dom6.style.background = "#f4f4f4";
    },
  },
  components: {
    SliderShow,
  },
};
</script>

<style lang="less" scoped>
.root1 {
  position: absolute;
  height: 373px;
  width: 1110px;
  top: 280px;
  left: 90px;
  margin-bottom: 100px;
  //border: 1px solid black;
}
.classify {
  width: 250px;
  height: 372px;
  border: 1px solid red;
  position: relative;
  top: 0px;
  left: 0px;
  background-color: #f4f4f4;
  border-right: 1px solid red;
  border-top: none;
}
.div1 {
  position: relative;
  top: 0px;
  height: 62px;
  line-height: 25px;
  text-align: right;
  color: white;
  //background-color: black;
}
.div2 {
  width: 10px;
  height: 20px;
  float: left;
  margin-left: 10px;
  margin-top: 5px;
}
.div3 {
  position: relative;
  top: 0px;
  height: 62px;
  line-height: 25px;
  text-align: right;
  color: white;
  //background-color: black;
}
.div4 {
  position: relative;
  top: 0px;
  height: 62px;
  line-height: 25px;
  text-align: right;
  color: white;
  //background-color: black;
}
.div5 {
  position: relative;
  top: 0px;
  height: 62px;
  line-height: 25px;
  text-align: right;
  color: white;
  //background-color: black;
}
.div6 {
  position: relative;
  top: 0px;
  height: 62px;
  line-height: 25px;
  text-align: right;
  color: white;
  //background-color: black;
}
.div7 {
  position: relative;
  top: 0px;
  height: 62px;
  line-height: 25px;
  text-align: right;
  color: white;
  //background-color: black;
}
.span1 {
  margin-right: 15px;
  font-size: 10px;
  //color: #999;
  a {
    color: #999;
    text-decoration: none;
  }
}
.span2 {
  margin-right: 15px;
  margin-top: -20px;
  font-size: 10px;
  //color: #999;
  a {
    color: #999;
    text-decoration: none;
  }
}
.span3 {
  font-size: 25px;
  margin-right: 20px;
  margin-bottom: 0px;
  color: red;
}

hr {
  background-color: gainsboro;
  border: none;
  height: 1px;
}
.man {
  font-size: 5px;
  color: red;
}
.a1 {
  text-decoration: none;
}
.class1 {
  width: 860px;
  height: 371px;
  border: 1px solid red;
  position: relative;
  left: 251px;
  top: -373px;
  .d1 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d2 {
    position: relative;
    top: 40px;
    left: 30px;
    //background-color: #999;
    width: 96%;
    height: 80px;
    .span4 {
      a {
        text-decoration: none;
        color: black;
        font-size: 14px;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d3 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: #999;
    width: 96%;
    height: 80px;
    .span4 {
      a {
        text-decoration: none;
        color: black;
        font-size: 14px;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
}

.class2 {
  width: 860px;
  height: 371px;
  border: 1px solid red;
  position: relative;
  left: 251px;
  top: -373px;
  .d1 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d2 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d3 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d4 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d5 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
}
.class3 {
  width: 860px;
  height: 371px;
  border: 1px solid red;
  position: relative;
  left: 251px;
  top: -373px;
  .d1 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d2 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d3 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d4 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d5 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
}
.class4 {
  width: 860px;
  height: 371px;
  border: 1px solid red;
  position: relative;
  left: 251px;
  top: -373px;
  .d1 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d2 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d3 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d4 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
}
.class5 {
  width: 860px;
  height: 371px;
  border: 1px solid red;
  position: relative;
  left: 251px;
  top: -373px;
  .d1 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d2 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d3 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d4 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d5 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
}
.class6 {
  width: 860px;
  height: 371px;
  border: 1px solid red;
  position: relative;
  left: 251px;
  top: -373px;
  .d1 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d2 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d3 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d4 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
  .d5 {
    position: relative;
    top: 30px;
    left: 30px;
    //background-color: black;
    width: 96%;
    height: 60px;
    .span4 {
      a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: black;
      }
    }
    .span5 {
      color: #999;
      position: relative;
      top: 30px;
      left: -30px;
      margin-left: 10px;
      font-size: 10px;
      font-weight: 500;

      a {
        text-decoration: none;
        color: #999;
      }
      a:hover {
        color: red;
      }
    }
  }
}
</style>