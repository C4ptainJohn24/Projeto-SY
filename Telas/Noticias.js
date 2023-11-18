import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    ScrollView,
    Linking,
    StyleSheet,
} from 'react-native';
import Animated, {
    Easing,
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import { CheckBox } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const RotateLogo = ({ rotation }) => {
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateY: `${rotation.value}deg` }],
        };
    });

    return (
        <Animated.View style={[styles.logoContainer, animatedStyle]}>
            <Image source={require('../assets/logom.png')} style={styles.logo} />
        </Animated.View>
    );
};

const NewsCard = ({ news, onPress }) => {
    const opacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 500 });
    }, [opacity]);

    const cardStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    });

    return (
        <Animated.View style={[styles.newsCard, cardStyle]}>
            <TouchableHighlight underlayColor="transparent" onPress={onPress}>
                <>
                    <Image source={{ uri: news.imageUrl }} style={styles.newsImage} />
                    <View style={styles.newsInfo}>
                        <Text style={styles.newsTitle}>{news.title}</Text>
                        <Text style={styles.newsDescription}>{news.description}</Text>
                        <Text style={styles.newsTimestamp}>Atualizado em 12/11/2023</Text>
                    </View>
                </>
            </TouchableHighlight>
        </Animated.View>
    );
};

const CategoryCheckBox = ({ category, isSelected, onPress }) => (
    <CheckBox
        title={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={category.imageSource}
                    style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
                />
                <Text>{category.label}</Text>
            </View>
        }
        checked={isSelected}
        onPress={onPress}
    />
);

export default function Noticias() {
    const rotation = useSharedValue(0);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        rotation.value = withTiming(360, { duration: 900, easing: Easing.linear });
    }, [rotation]);

    const newsData = [
        {
            title: 'Preço do Alface Sofre Reajuste',
            description:
                'Cenário de preços segue favorável no cinturão verde paulista',
            link: 'https://www.noticiasagricolas.com.br/noticias/hortifruti/363567-alface-cepea-cenario-de-precos-segue-favoravel-no-cinturao-verde-paulista.html',
            imageUrl:
                'https://s2.static.brasilescola.uol.com.br/be/2020/05/alface.jpg',
            category: 'Alface',
        },
        {
            title: 'Estudo Revela Mecanismos Moleculares Essenciais para o Desenvolvimento do Tomate',
            description: 'Veja na íntegra a Notícia',
            link: 'https://gizmodo.uol.com.br/estudo-revela-mecanismos-moleculares-essenciais-para-o-desenvolvimento-do-tomate/',
            imageUrl:
                'https://dynamicassets.basf.com/is/image/basf/Tomate%20-%20fases%20de%20crescimento:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=4096&hei=2314',
            category: 'Tomate',
        },
        {
            title: 'Sorvete de Alface? No MasterChef Tem!',
            description: 'Veja na íntegra o momento',
            link: 'https://www.band.uol.com.br/entretenimento/masterchef/noticias/sorvete-de-alface-do-masterchef-profissionais-veja-a-receita-16636558',
            imageUrl:
                'https://img.band.uol.com.br/image/2023/09/29/franklin-fez-sorbet-de-alface-para-compor-sobremesa-inspirada-em-salada-caprese-155056.webp',
            category: 'Alface',
        },
        {
            title: 'Calor Acelera Maturação e Preço Cai nos Atacados',
            description: 'Momento é bom para o consumidor',
            link: 'https://www.hfbrasil.org.br/br/tomate-cepea-calor-acelera-maturacao-e-preco-cai-nos-atacados-1.aspx',
            imageUrl:
                'https://www.uvm.edu/content/shared/files/styles/1200/public/uvm-extension-cultivating-healthy-communities/tomatoes2-e.jpg?t=rpri8o',
            category: 'Tomate',
        },
        {
            title: 'Hortelã Aparece Por R$1,50 no Nordeste do País',
            description: 'Preço é um dos menores do país',
            link: 'https://www.ceara.gov.br/2023/10/10/unidade-da-hortela-esta-a-r-150-na-ceasa-em-maracanau/',
            imageUrl:
                'https://t2.uc.ltmcdn.com/pt/posts/3/4/5/como_cuidar_da_hortela_13543_orig.jpg',
            category: 'Hortelã',
        },
        {
            title: 'Suco de Alface Comprovadamente Ajuda na Saúde',
            description: 'Estudo indica benefícios comprovados do suco',
            link: 'https://www.uol.com.br/vivabem/amp-stories/regula-colesterol-e-suga-acucar-do-sangue-doencas-que-suco-de-alface-cura/',
            imageUrl:
                'https://www.mundoboaforma.com.br/wp-content/uploads/2017/01/suco-detox-com-alface-1200.jpg',
            category: 'Alface',
        },
        {
            title: 'A SmartYard te Ajudou Tanto Que Tá Sobrando Tomates? Sem Problemas!',
            description: '25 Receitas Saborosas Para Aproveitar Seus Tomates',
            link: 'https://www.receiteria.com.br/receitas-com-tomate/',
            imageUrl:
                'https://www.receiteria.com.br/wp-content/uploads/receitas-com-tomate-1-730x449.jpg',
            category: 'Tomate',
        },
        {
            title: 'Fruta ou Legume? Saiba Classificar Corretamente o Tomate',
            description: '',
            link: 'https://www.nationalgeographicbrasil.com/ciencia/2023/08/o-tomate-e-uma-fruta-ou-um-legume-descubra-por-que-ele-e-tao-benefico-para-sua-saude',
            imageUrl:
                'https://www.coisasdaroca.com/wp-content/uploads/2021/03/Tomates.jpeg',
            category: 'Tomate',
        },
        {
            title: 'Nova Espécie de Hortelã surge na Amazônia',
            description: 'Veja na íntegra a notícia',
            link: 'https://oeco.org.br/noticias/pesquisadores-descrevem-nova-especie-de-hortela-da-amazonia/',
            imageUrl:
                'https://i0.wp.com/oeco.org.br/wp-content/uploads/2023/04/Oeco2_roxinho-amazonico_Foto-Fernanda-Antunes-Carvalhohoriz.jpg?resize=1920%2C1280&ssl=1',
            category: 'Hortelã',
        },
        {
            title: 'Como Cultivar Corretamente a Sua Hortelã',
            description: 'Dicas Valiosas Para Seu Cultivo',
            link: 'https://revistacasaejardim.globo.com/comportamento/bem-estar-e-saude/noticia/2023/05/hortela-beneficios-para-saude-usos-na-gastronomia-e-como-cultivar.ghtml',
            imageUrl:
                'https://drlucasfustinoni.com.br/wp-content/uploads/2021/05/dr-lucas-fustinoni_texto-novo-blog_beneficios_hortela_nos_cabelos%C2%A9ArthurHidden_from_Freepik.jpg',
            category: 'Hortelã',
        },
        {
            title: 'Alface Teve Alta Procura em Outubro',
            description: 'Notícia Anima os Agricultores de Todo o Brasil',
            link: 'https://www.hfbrasil.org.br/br/alface-cepea-inicio-de-outubro-aumenta-demanda-por-alfaces.aspx',
            imageUrl:
                'https://www.hfbrasil.org.br/upload/galeria/thumbnail/0386430001696627126.jpg',
            category: 'Alface',
        },
        {
            title: 'Três Formas de Fazer Suas Mudas de Hortelã',
            description: 'Torne Suas Mudas Ainda Mais Eficientes',
            link: 'https://www.campograndenews.com.br/colunistas/trilha-organica/aprenda-tres-formas-de-fazer-mudas-de-hortela',
            imageUrl:
                'https://tribunadejundiai.com.br/wp-content/uploads/2022/07/hortela-pimenta-foto-de-cima-compressed-1200x900.jpg',
            category: 'Hortelã',
        },
        {
            title: 'Alface Traz o Primeiro Efeito Das Cheias: Preço da Unidade Subiu 50,6% na Ceasa',
            description: 'A SmartYard traz benefícios mesmo sem cheias!',
            link: 'https://diariogaucho.clicrbs.com.br/dia-a-dia/noticia/2023/09/alface-traz-o-primeiro-efeito-das-cheias-preco-da-unidade-subiu-50-6-na-ceasa-34244065.html',
            imageUrl:
                'https://saude.abril.com.br/wp-content/uploads/2020/11/ok-alimentacao-alface-Poh-Kim-YeohEyeEm-Getty-Images.png?w=680&h=440&crop=1',
            category: 'Alface',
        },
        {
            title: 'A montanha-Russa dos Preços do Tomate',
            description: 'Consumidores Raramente Entendem as Flutuações no Preço',
            link: 'https://www.agrolink.com.br/noticias/a-montanha-russa-dos-precos-do-tomate_482737.html',
            imageUrl:
                'https://s2.glbimg.com/VEma3d8VnUfHkngH-Ol_MLyPXf4=/e.glbimg.com/og/ed/f/original/2016/10/06/tomato-red-salad-food.jpg',
            category: 'Tomate',
        },
        {
            title: '200% Mais Caro! Alfaces Aparecem Com Preço Irreconhecível Após Temporal',
            description: 'Valores Estão Acima do Comum no País',
            link: 'https://gauchazh.clicrbs.com.br/colunistas/gisele-loeblein/noticia/2023/10/efeito-da-chuva-aparece-nos-precos-valor-da-alface-ficou-200-maior-na-ceasa-clnupl37400dx015y5hlv85w1.html',
            imageUrl:
                'https://www.petz.com.br/blog/wp-content/uploads/2021/03/melhor-adubo-para-horta2.jpg',
            category: 'Alface',
        },
        {
            title: 'Aprenda a Fazer Chá de Hortelã',
            description: 'Um Ótimo Destino Para Sua Hortelã',
            link: 'https://www.uol.com.br/vivabem/noticias/redacao/2021/12/08/cha-de-hortela-age-contra-ansiedade-e-ate-previne-cancer-veja-beneficios.htm',
            imageUrl:
                'https://conteudo.imguol.com.br/c/entretenimento/5f/2021/12/07/cha-de-hortela-1638902490347_v2_900x506.jpg',
            category: 'Hortelã',
        },
        {
            title: 'Saiba Mais Sobre os Benefícios da Hortelã na Sua Saúde',
            description: 'Benefícios vão muito além de um bom hálito',
            link: 'https://tribunadejundiai.com.br/mais/horta-e-jardim/10-beneficios-da-hortela/',
            imageUrl:
                'https://tribunadejundiai.com.br/wp-content/uploads/2022/06/Hortela.jpg',
            category: 'Hortelã',
        },
        {
            title: 'Água refrescante de laranja com acerola e hortelã',
            description: 'Hortelã é um dos ingredientes principais',
            link: 'https://www.bonde.com.br/gastronomia/receitas/agua-refrescante-de-laranja-com-acerola-e-hortela-532924.html',
            imageUrl:
                'https://www.bonde.com.br/api/images/proxy?format=webp&width=800&src=https://www.bonde.com.br/img/bondenews/2021/02/img_1_33_4810.jpg',
            category: 'Hortelã',
        },
        {
            title: 'Conheça Todos os Tipos de Tomate',
            description: 'Conheça mais sobre o tomate e suas variantes',
            link: 'https://blueseeds.com.br/tomate-um-universo-de-tipos-e-sabores/',
            imageUrl:
                'https://blueseeds.com.br/wp-content/uploads/2022/05/IMG_0705.jpg',
            category: 'Tomate',
        },
        {
            title: 'Você Conhece A Origem do Alface?',
            description: 'Separamos Uma Matéria Completa Para Você Sair Sabendo de Tudo!',
            link: 'https://www.embrapa.br/hortalica-nao-e-so-salada/alface',
            imageUrl:
                'https://lh6.googleusercontent.com/VYcnQDT_4o3SaaL5Cynd4NvpJyO1gpIMwzR1O3DRd3Z335S6n3PXrubjUWFuW1XJPLuBnINZjAS2eGQYSnW_eQpFzCf4fsK3PxMY1EhWRYAXwC89XPOXOkfauSCHpc5Pqmg50ty-qABb_DXeKrHb0py1MaroVewloV5pfRRWWQex54plGmoWu70n3uhw',
            category: 'Alface',
        },
        {
            title: 'Quais São as Fases de Crescimento do Tomate?',
            description: 'Conheça Mais Sobre Aquilo que Cultiva',
            link: 'https://agriculture.basf.com/br/pt/conteudos/cultivos-e-sementes/tomate/fases-de-crescimento-tomate.html',
            imageUrl:
                'https://canaldohorticultor.com.br/wp-content/uploads/2021/06/Ponto-de-colheita-de-tomates.png',
            category: 'Tomate',
        },
        {
            title: '7 Dicas Para Ter Sucesso na Plantação de Tomate Cereja',
            description: 'Torne seu Cultivo de Tomate Cereja Ainda Mais Eficaz',
            link: 'https://www.semadesc.ms.gov.br/7-dicas-para-ter-sucesso-na-plantacao-de-tomate-cereja/',
            imageUrl:
                'https://www.semadesc.ms.gov.br/wp-content/webpc-passthru.php?src=https://www.semadesc.ms.gov.br/wp-content/uploads/2016/12/1609_tomate_cereja_2-600x372.jpg&nocache=1',
            category: 'Tomate',
        },
        {
            title: 'A Hortelã na Prevenção da Gripe',
            description: 'A Hortelã Pode Ser Uma Excelente Aliada Na Prevenção e Na Cura Da Gripe',
            link: 'https://www.uol.com.br/vivabem/amp-stories/regula-colesterol-e-suga-acucar-do-sangue-doencas-que-suco-de-alface-cura/',
            imageUrl:
                'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/06/20/827459935-xarope-natural-e1687285381527.jpg',
            category: 'Hortelã',
        },
        {
            title: 'Alface Ajuda a Emagrecer?',
            description: 'Saiba mais na matéria que nossa equipe separou',
            link: 'https://www.uol.com.br/vivabem/noticias/redacao/2019/08/30/alface-7-beneficios-e-como-conservar-e-consumir.htm',
            imageUrl:
                'https://static.itdg.com.br/images/auto-auto/4afa4ca20ba390d095834251530b742b/leite-de-alface.jpg',
            category: 'Alface',
        },
        {
            title: 'Tomate da Epagri Produz Até 7kg Por Planta e é Resistente a Doenças',
            description: 'Veja na íntegra a notícia',
            link: 'https://www.epagri.sc.gov.br/index.php/2021/07/20/tomate-da-epagri-produz-ate-7kg-por-planta-e-e-resistente-a-doencas/',
            imageUrl:
                'https://www.epagri.sc.gov.br/wp-content/uploads/2021/07/tomate-organico-Kaicara-Epagri.jpg',
            category: 'Tomate',
        },

        // Adicione mais notícias conforme necessário
    ];

    const categories = [
        {
            label: 'Alface',
            value: 'Alface',
            imageSource:
                require('../assets/Alface.png'),
        },
        {
            label: 'Tomate',
            value: 'Tomate',
            imageSource:
                require('../assets/Tomate.png'),
        },
        {
            label: 'Hortelã',
            value: 'Hortelã',
            imageSource:
                require('../assets/Hortela.png'),
        },
    ];

    const handleCategoryToggle = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category];

        setSelectedCategories(updatedCategories);
    };

    const isCategorySelected = (category) =>
        selectedCategories.includes(category);

    const filteredNews = newsData.filter(
        (news) =>
            selectedCategories.length === 0 ||
            selectedCategories.includes(news.category)
    );

    return (
        <ScrollView>
            {/* Sua Logo com Animação */}
            <RotateLogo rotation={rotation} />

            {/* Seletor de Categorias */}
            <LinearGradient
                colors={['#0097b2', '#7ed957']}
                style={{ padding: 10, borderTopRightRadius: 25, borderTopLeftRadius: 25, borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }}>
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 22,
                        textAlign: 'center',
                    }}>
                    Procurando algo em específico?
                </Text>
                {categories.map((category, index) => (
                    <CategoryCheckBox
                        key={index}
                        category={category}
                        isSelected={isCategorySelected(category.value)}
                        onPress={() => handleCategoryToggle(category.value)}
                    />
                ))}
            </LinearGradient>

            {/* Novo Tipo de Card de Notícia */}
            <View style={{ padding: 10 }}>
                {filteredNews.map((news, index) => (
                    <NewsCard
                        key={index}
                        news={news}
                        onPress={() => Linking.openURL(news.link)}
                    />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    newsCard: {
        margin: 10,
        borderRadius: 15,
        overflow: 'hidden',
    },
    newsImage: {
        width: '100%',
        height: 300,
        borderRadius: 15,
    },
    newsInfo: {
        padding: 10,
    },
    newsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    newsDescription: {
        fontSize: 16,
    },
    newsTimestamp: {
        fontSize: 12,
        color: 'gray',
        marginTop: 10,
    },
});
