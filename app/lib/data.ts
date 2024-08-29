const companylist: string = `Afterpay - 上海
Airbnb - 北京
Amazon - 北京/上海
AMD - 上海
Apple - 北京/上海
ArcSoft - 杭州`

interface Company {
    name: string;
    location: string[];
}

export const companies: Company[] = companylist.split('\n').map(line => {
    const [name, location] = line.split(' - ');
    return { name: name.trim(), location: location.trim().split('/') };
});