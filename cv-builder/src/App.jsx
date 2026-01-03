import { useState } from 'react'
import { initialCVData } from './cvData'
import html2pdf from 'html2pdf.js'

function App() {
  const [cvData, setCvData] = useState(initialCVData)

  const updatePersonalInfo = (field, value) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }))
  }

  const updateProfile = (value) => {
    setCvData(prev => ({ ...prev, profile: value }))
  }

  const updateEducation = (index, field, value) => {
    setCvData(prev => {
      const newEducation = [...prev.education]
      newEducation[index] = { ...newEducation[index], [field]: value }
      return { ...prev, education: newEducation }
    })
  }

  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, { institution: "", date: "" }]
    }))
  }

  const deleteEducation = (index) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }))
  }

  const updateWorkExperience = (index, field, value) => {
    setCvData(prev => {
      const newExp = [...prev.workExperience]
      newExp[index] = { ...newExp[index], [field]: value }
      return { ...prev, workExperience: newExp }
    })
  }

  const updateWorkBullet = (expIndex, bulletIndex, value) => {
    setCvData(prev => {
      const newExp = [...prev.workExperience]
      const newBullets = [...newExp[expIndex].bullets]
      newBullets[bulletIndex] = value
      newExp[expIndex] = { ...newExp[expIndex], bullets: newBullets }
      return { ...prev, workExperience: newExp }
    })
  }

  const addWorkBullet = (expIndex) => {
    setCvData(prev => {
      const newExp = [...prev.workExperience]
      newExp[expIndex] = { ...newExp[expIndex], bullets: [...newExp[expIndex].bullets, ""] }
      return { ...prev, workExperience: newExp }
    })
  }

  const deleteWorkBullet = (expIndex, bulletIndex) => {
    setCvData(prev => {
      const newExp = [...prev.workExperience]
      newExp[expIndex] = {
        ...newExp[expIndex],
        bullets: newExp[expIndex].bullets.filter((_, i) => i !== bulletIndex)
      }
      return { ...prev, workExperience: newExp }
    })
  }

  const addWorkExperience = () => {
    setCvData(prev => ({
      ...prev,
      workExperience: [...prev.workExperience, { company: "", date: "", bullets: [""] }]
    }))
  }

  const deleteWorkExperience = (index) => {
    setCvData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter((_, i) => i !== index)
    }))
  }

  const updateProject = (index, value) => {
    setCvData(prev => {
      const newProjects = [...prev.projects]
      newProjects[index] = value
      return { ...prev, projects: newProjects }
    })
  }

  const addProject = () => {
    setCvData(prev => ({ ...prev, projects: [...prev.projects, ""] }))
  }

  const deleteProject = (index) => {
    setCvData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }))
  }

  const updateSkill = (index, field, value) => {
    setCvData(prev => {
      const newSkills = [...prev.skills]
      newSkills[index] = { ...newSkills[index], [field]: value }
      return { ...prev, skills: newSkills }
    })
  }

  const addSkill = () => {
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, { category: "", items: "" }]
    }))
  }

  const deleteSkill = (index) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }))
  }

  const updateAppreciation = (index, value) => {
    setCvData(prev => {
      const newAppr = [...prev.appreciations]
      newAppr[index] = value
      return { ...prev, appreciations: newAppr }
    })
  }

  const addAppreciation = () => {
    setCvData(prev => ({ ...prev, appreciations: [...prev.appreciations, ""] }))
  }

  const deleteAppreciation = (index) => {
    setCvData(prev => ({
      ...prev,
      appreciations: prev.appreciations.filter((_, i) => i !== index)
    }))
  }

  const updateAchievement = (index, value) => {
    setCvData(prev => {
      const newAch = [...prev.achievements]
      newAch[index] = value
      return { ...prev, achievements: newAch }
    })
  }

  const addAchievement = () => {
    setCvData(prev => ({ ...prev, achievements: [...prev.achievements, ""] }))
  }

  const deleteAchievement = (index) => {
    setCvData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }))
  }

  const updateCertification = (index, field, value) => {
    setCvData(prev => {
      const newCerts = [...prev.certifications]
      newCerts[index] = { ...newCerts[index], [field]: value }
      return { ...prev, certifications: newCerts }
    })
  }

  const addCertification = () => {
    setCvData(prev => ({
      ...prev,
      certifications: [...prev.certifications, { name: "", details: "" }]
    }))
  }

  const deleteCertification = (index) => {
    setCvData(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
    }))
  }

  const updateExtraCurricular = (index, field, value) => {
    setCvData(prev => {
      const newExtra = [...prev.extraCurricular]
      newExtra[index] = { ...newExtra[index], [field]: value }
      return { ...prev, extraCurricular: newExtra }
    })
  }

  const updateExtraBullet = (extraIndex, bulletIndex, value) => {
    setCvData(prev => {
      const newExtra = [...prev.extraCurricular]
      const newBullets = [...newExtra[extraIndex].bullets]
      newBullets[bulletIndex] = value
      newExtra[extraIndex] = { ...newExtra[extraIndex], bullets: newBullets }
      return { ...prev, extraCurricular: newExtra }
    })
  }

  const addExtraBullet = (extraIndex) => {
    setCvData(prev => {
      const newExtra = [...prev.extraCurricular]
      newExtra[extraIndex] = { ...newExtra[extraIndex], bullets: [...newExtra[extraIndex].bullets, ""] }
      return { ...prev, extraCurricular: newExtra }
    })
  }

  const deleteExtraBullet = (extraIndex, bulletIndex) => {
    setCvData(prev => {
      const newExtra = [...prev.extraCurricular]
      newExtra[extraIndex] = {
        ...newExtra[extraIndex],
        bullets: newExtra[extraIndex].bullets.filter((_, i) => i !== bulletIndex)
      }
      return { ...prev, extraCurricular: newExtra }
    })
  }

  const addExtraCurricular = () => {
    setCvData(prev => ({
      ...prev,
      extraCurricular: [...prev.extraCurricular, { title: "", bullets: [""] }]
    }))
  }

  const deleteExtraCurricular = (index) => {
    setCvData(prev => ({
      ...prev,
      extraCurricular: prev.extraCurricular.filter((_, i) => i !== index)
    }))
  }

  const updateDissertation = (field, value) => {
    setCvData(prev => ({
      ...prev,
      dissertation: { ...prev.dissertation, [field]: value }
    }))
  }

  const updateDissertationBullet = (bulletIndex, value) => {
    setCvData(prev => {
      const newBullets = [...prev.dissertation.bullets]
      newBullets[bulletIndex] = value
      return { ...prev, dissertation: { ...prev.dissertation, bullets: newBullets } }
    })
  }

  const addDissertationBullet = () => {
    setCvData(prev => ({
      ...prev,
      dissertation: { ...prev.dissertation, bullets: [...prev.dissertation.bullets, ""] }
    }))
  }

  const deleteDissertationBullet = (bulletIndex) => {
    setCvData(prev => ({
      ...prev,
      dissertation: {
        ...prev.dissertation,
        bullets: prev.dissertation.bullets.filter((_, i) => i !== bulletIndex)
      }
    }))
  }

  const updatePublication = (field, value) => {
    setCvData(prev => ({
      ...prev,
      publication: { ...prev.publication, [field]: value }
    }))
  }

  const downloadPDF = () => {
    const element = document.getElementById('cv-preview')
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'SiddeshVilasPawar_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }
    html2pdf().set(opt).from(element).save()
  }

  return (
    <div className="app-container">
      <div className="editor-panel">
        <div className="editor-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <a href="../index.html" className="home-btn" title="Back to Home">
              🏠
            </a>
            <h1>CV Editor</h1>
          </div>
          <button className="download-btn" onClick={downloadPDF}>
            📄 Download as PDF
          </button>
        </div>

        {/* Personal Info */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Personal Information</h3>
          </div>
          <div className="field-group">
            <label>Full Name</label>
            <input
              value={cvData.personalInfo.name}
              onChange={(e) => updatePersonalInfo('name', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>Phone</label>
            <input
              value={cvData.personalInfo.phone}
              onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>Email</label>
            <input
              value={cvData.personalInfo.email}
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>Location</label>
            <input
              value={cvData.personalInfo.location}
              onChange={(e) => updatePersonalInfo('location', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>GitHub URL</label>
            <input
              value={cvData.personalInfo.github}
              onChange={(e) => updatePersonalInfo('github', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>LinkedIn URL</label>
            <input
              value={cvData.personalInfo.linkedin}
              onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
            />
          </div>
        </div>

        {/* Profile */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Profile</h3>
          </div>
          <div className="field-group">
            <label>Profile Summary</label>
            <textarea
              value={cvData.profile}
              onChange={(e) => updateProfile(e.target.value)}
            />
          </div>
        </div>

        {/* Education */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Education</h3>
            <button className="add-btn" onClick={addEducation}>+ Add Education</button>
          </div>
          {cvData.education.map((edu, index) => (
            <div key={index} className="item-card">
              <div className="item-header">
                <span>Education #{index + 1}</span>
                <button className="delete-btn" onClick={() => deleteEducation(index)}>Delete</button>
              </div>
              <div className="field-group">
                <label>Institution & Degree</label>
                <input
                  value={edu.institution}
                  onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                />
              </div>
              <div className="field-group">
                <label>Date</label>
                <input
                  value={edu.date}
                  onChange={(e) => updateEducation(index, 'date', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Work Experience */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Work Experience</h3>
            <button className="add-btn" onClick={addWorkExperience}>+ Add Experience</button>
          </div>
          {cvData.workExperience.map((exp, expIndex) => (
            <div key={expIndex} className="item-card">
              <div className="item-header">
                <span>Experience #{expIndex + 1}</span>
                <button className="delete-btn" onClick={() => deleteWorkExperience(expIndex)}>Delete</button>
              </div>
              <div className="field-group">
                <label>Company & Role</label>
                <input
                  value={exp.company}
                  onChange={(e) => updateWorkExperience(expIndex, 'company', e.target.value)}
                />
              </div>
              <div className="field-group">
                <label>Date</label>
                <input
                  value={exp.date}
                  onChange={(e) => updateWorkExperience(expIndex, 'date', e.target.value)}
                />
              </div>
              <div className="field-group">
                <label>Bullet Points</label>
                {exp.bullets.map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="bullet-item">
                    <input
                      value={bullet}
                      onChange={(e) => updateWorkBullet(expIndex, bulletIndex, e.target.value)}
                    />
                    <button className="remove-bullet-btn" onClick={() => deleteWorkBullet(expIndex, bulletIndex)}>×</button>
                  </div>
                ))}
                <button className="add-bullet-btn" onClick={() => addWorkBullet(expIndex)}>+ Add Bullet</button>
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Projects</h3>
            <button className="add-btn" onClick={addProject}>+ Add Project</button>
          </div>
          {cvData.projects.map((project, index) => (
            <div key={index} className="bullet-item">
              <input
                value={project}
                onChange={(e) => updateProject(index, e.target.value)}
              />
              <button className="remove-bullet-btn" onClick={() => deleteProject(index)}>×</button>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Skills</h3>
            <button className="add-btn" onClick={addSkill}>+ Add Skill</button>
          </div>
          {cvData.skills.map((skill, index) => (
            <div key={index} className="item-card">
              <div className="item-header">
                <span>Skill Category #{index + 1}</span>
                <button className="delete-btn" onClick={() => deleteSkill(index)}>Delete</button>
              </div>
              <div className="field-group">
                <label>Category</label>
                <input
                  value={skill.category}
                  onChange={(e) => updateSkill(index, 'category', e.target.value)}
                />
              </div>
              <div className="field-group">
                <label>Items</label>
                <input
                  value={skill.items}
                  onChange={(e) => updateSkill(index, 'items', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Appreciations */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Appreciations</h3>
            <button className="add-btn" onClick={addAppreciation}>+ Add</button>
          </div>
          {cvData.appreciations.map((appr, index) => (
            <div key={index} className="bullet-item">
              <input
                value={appr}
                onChange={(e) => updateAppreciation(index, e.target.value)}
              />
              <button className="remove-bullet-btn" onClick={() => deleteAppreciation(index)}>×</button>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Achievements</h3>
            <button className="add-btn" onClick={addAchievement}>+ Add</button>
          </div>
          {cvData.achievements.map((ach, index) => (
            <div key={index} className="bullet-item">
              <input
                value={ach}
                onChange={(e) => updateAchievement(index, e.target.value)}
              />
              <button className="remove-bullet-btn" onClick={() => deleteAchievement(index)}>×</button>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Certifications</h3>
            <button className="add-btn" onClick={addCertification}>+ Add</button>
          </div>
          {cvData.certifications.map((cert, index) => (
            <div key={index} className="item-card">
              <div className="item-header">
                <span>Certification #{index + 1}</span>
                <button className="delete-btn" onClick={() => deleteCertification(index)}>Delete</button>
              </div>
              <div className="field-group">
                <label>Name</label>
                <input
                  value={cert.name}
                  onChange={(e) => updateCertification(index, 'name', e.target.value)}
                />
              </div>
              <div className="field-group">
                <label>Details</label>
                <input
                  value={cert.details}
                  onChange={(e) => updateCertification(index, 'details', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Extra-Curricular */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Extra-Curricular</h3>
            <button className="add-btn" onClick={addExtraCurricular}>+ Add</button>
          </div>
          {cvData.extraCurricular.map((extra, extraIndex) => (
            <div key={extraIndex} className="item-card">
              <div className="item-header">
                <span>Activity #{extraIndex + 1}</span>
                <button className="delete-btn" onClick={() => deleteExtraCurricular(extraIndex)}>Delete</button>
              </div>
              <div className="field-group">
                <label>Title</label>
                <input
                  value={extra.title}
                  onChange={(e) => updateExtraCurricular(extraIndex, 'title', e.target.value)}
                />
              </div>
              <div className="field-group">
                <label>Bullet Points</label>
                {extra.bullets.map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="bullet-item">
                    <input
                      value={bullet}
                      onChange={(e) => updateExtraBullet(extraIndex, bulletIndex, e.target.value)}
                    />
                    <button className="remove-bullet-btn" onClick={() => deleteExtraBullet(extraIndex, bulletIndex)}>×</button>
                  </div>
                ))}
                <button className="add-bullet-btn" onClick={() => addExtraBullet(extraIndex)}>+ Add Bullet</button>
              </div>
            </div>
          ))}
        </div>

        {/* Dissertation */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Dissertation</h3>
          </div>
          <div className="field-group">
            <label>Title</label>
            <input
              value={cvData.dissertation.title}
              onChange={(e) => updateDissertation('title', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>Submitted To</label>
            <input
              value={cvData.dissertation.submittedTo}
              onChange={(e) => updateDissertation('submittedTo', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>Bullet Points</label>
            {cvData.dissertation.bullets.map((bullet, bulletIndex) => (
              <div key={bulletIndex} className="bullet-item">
                <input
                  value={bullet}
                  onChange={(e) => updateDissertationBullet(bulletIndex, e.target.value)}
                />
                <button className="remove-bullet-btn" onClick={() => deleteDissertationBullet(bulletIndex)}>×</button>
              </div>
            ))}
            <button className="add-bullet-btn" onClick={addDissertationBullet}>+ Add Bullet</button>
          </div>
        </div>

        {/* Publication */}
        <div className="section-editor">
          <div className="section-header">
            <h3>Publication</h3>
          </div>
          <div className="field-group">
            <label>Authors</label>
            <input
              value={cvData.publication.authors}
              onChange={(e) => updatePublication('authors', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>Title</label>
            <input
              value={cvData.publication.title}
              onChange={(e) => updatePublication('title', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>Journal</label>
            <input
              value={cvData.publication.journal}
              onChange={(e) => updatePublication('journal', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>DOI</label>
            <input
              value={cvData.publication.doi}
              onChange={(e) => updatePublication('doi', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>Keywords</label>
            <textarea
              value={cvData.publication.keywords}
              onChange={(e) => updatePublication('keywords', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="preview-panel">
        <div id="cv-preview" className="cv-preview">
          {/* Header */}
          <div className="cv-header">
            <h1>{cvData.personalInfo.name}</h1>
            <div className="cv-contact">
              {cvData.personalInfo.phone} | {cvData.personalInfo.email} | {cvData.personalInfo.location} |
              <br />
              <a href={cvData.personalInfo.github}>{cvData.personalInfo.github}</a> | <a href={cvData.personalInfo.linkedin}>{cvData.personalInfo.linkedin}</a>
            </div>
          </div>

          {/* Profile */}
          <div className="cv-section">
            <div className="cv-section-title">Profile</div>
            <p className="cv-profile">{cvData.profile}</p>
          </div>

          {/* Education */}
          <div className="cv-section">
            <div className="cv-section-title">Education</div>
            {cvData.education.map((edu, index) => (
              <div key={index} className="cv-education-item">
                <span className="institution">{edu.institution}</span>
                <span className="date">{edu.date}</span>
              </div>
            ))}
          </div>

          {/* Work Experience */}
          <div className="cv-section">
            <div className="cv-section-title">Work experience</div>
            {cvData.workExperience.map((exp, index) => (
              <div key={index} className="cv-experience-item">
                <div className="cv-experience-header">
                  <span className="company">{exp.company}</span>
                  <span className="date">{exp.date}</span>
                </div>
                <ul className="cv-bullets">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="cv-section">
            <div className="cv-section-title">Projects</div>
            <ul className="cv-bullets">
              {cvData.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="cv-section">
            <div className="cv-section-title">Skills</div>
            <p><strong>Technical Skills:</strong></p>
            {cvData.skills.map((skill, index) => (
              <div key={index} className="cv-skills-category">
                <strong>{skill.category}:</strong> {skill.items}
              </div>
            ))}
          </div>

          {/* Appreciations */}
          <div className="cv-section">
            <div className="cv-section-title">Appreciations</div>
            <ul className="cv-bullets">
              {cvData.appreciations.map((appr, index) => (
                <li key={index}>{appr}</li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="cv-section">
            <div className="cv-section-title">Achievements</div>
            <ul className="cv-bullets">
              {cvData.achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </div>

          {/* Certification */}
          <div className="cv-section">
            <div className="cv-section-title">Certification</div>
            <ul className="cv-bullets">
              {cvData.certifications.map((cert, index) => (
                <li key={index} className="cv-cert-item">
                  <span className="cert-name">{cert.name}</span> {cert.details}
                </li>
              ))}
            </ul>
          </div>

          {/* Extra-Curricular */}
          <div className="cv-section">
            <div className="cv-section-title">Extra-Curricular</div>
            {cvData.extraCurricular.map((extra, index) => (
              <div key={index} className="cv-experience-item">
                <div className="cv-experience-header">
                  <span className="company">{extra.title}</span>
                </div>
                <ul className="cv-bullets">
                  {extra.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Dissertation */}
          <div className="cv-section">
            <div className="cv-section-title">Dissertation</div>
            <div className="cv-experience-item">
              <div className="cv-experience-header">
                <span className="company">{cvData.dissertation.title}</span>
                <span className="date">{cvData.dissertation.submittedTo}</span>
              </div>
              <ul className="cv-bullets">
                {cvData.dissertation.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Publication */}
          <div className="cv-section">
            <div className="cv-section-title">Publication</div>
            <div className="cv-publication">
              <p>{cvData.publication.authors} <span className="title">{cvData.publication.title}</span> {cvData.publication.journal}</p>
              <p>{cvData.publication.doi}</p>
              <p className="cv-keywords"><strong>Keywords:</strong> {cvData.publication.keywords}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
