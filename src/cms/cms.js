import CMS from 'netlify-cms'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProjectPagePreview from './preview-templates/ProjectPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

/* Gallery Image Pages */
import FirstBlockLedgerPagePreview from './preview-templates/FirstBlockLedgerPagePreview'
import SecurityPagePreview from './preview-templates/SecurityPagePreview'
import LaborCommunicationsPagePreview from './preview-templates/LaborCommunicationsPagePreview'
import SanCredosPagePreview from './preview-templates/SanCredosPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('project', ProjectPagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('blog', ArticlePreview)

CMS.registerPreviewTemplate('firstblockledger', FirstBlockLedgerPagePreview)
CMS.registerPreviewTemplate('security', SecurityPagePreview)
CMS.registerPreviewTemplate('laborcommunications', LaborCommunicationsPagePreview)
CMS.registerPreviewTemplate('sancredos', SanCredosPagePreview)
